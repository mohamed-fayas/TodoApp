import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskserviceService } from '../service/taskservice.service';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.css']
})
export class PendingTaskComponent {

  constructor(private service: TaskserviceService, private snackbar: MatSnackBar) { }

  taskList: any[] = []  //for storing data while calling from api
  userId: any
  isSelected = false

  taskPriority = ''

  filteredList: any[] = []
  modalArray: any[] = []

  tableId: number = 0;
  idModal: number = 0;

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    console.log(this.userId)
    this.loadPendingTasks()
  }

  loadPendingTasks() {

    this.service.fetchTasks(this.userId, 'pending').subscribe((res: { statusCode: number, tasks: any[], msg: string }) => {

      if (res.tasks.length > 0) {
        this.taskList = res.tasks
        this.filteredList = this.taskList
        console.log(this.taskList)
      }
    })
  }

  updateRow(selectedItem: any, index: number) {

    console.log(selectedItem)

    const uploadedData = new FormData()

    let currentDate = new Date().toLocaleDateString()
    uploadedData.append('completion_date', currentDate)
    uploadedData.append('description', selectedItem['description'])
    uploadedData.append('task', selectedItem['task'])
    uploadedData.append('status', 'completed')
    uploadedData.append('user', this.userId)

    this.service.updateTask(selectedItem.id, uploadedData).subscribe((res: { statusCode: number, msg: string }) => {

      console.log(res.msg)
      this.taskList.splice(index, 1)


    })
  }

  deleteTask(id: number, index: number) {

    this.service.removeTask(id).subscribe((res: { statusCode: number, msg: string }) => {

      console.log(res.msg)

      this.taskList.splice(index, 1)

      console.log(this.taskList)
      this.showSnackBar(res.msg, 'snackBarDanger')

    })
  }

  filterTask() {

    if (this.taskPriority != 'all') {


      if (this.isSelected == false) {

        this.filteredList = this.taskList.filter((item: any) => {

          return item.priority.includes(this.taskPriority);
        });



        this.isSelected = true
      }

      else {


        this.filteredList = this.taskList
        this.filteredList = this.taskList.filter((item: any) => {

          return item.priority.includes(this.taskPriority);
        });
      }

    }

    else {
      this.filteredList = this.taskList
    }
  }

  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }

  modalFunction(selectedItem: any, id: number, index: number) {
    this.date = selectedItem['date']
    this.task = selectedItem['task']
    this.description = selectedItem['description']
    this.priority = selectedItem['priority']
    this.idModal = id
    this.tableId = index
  }


  date = ''
  task = ''
  description = ''
  priority = ''

  modalChange(formData: any) {
    console.log('formData');
    const uploadedData = new FormData()
    uploadedData.append('description', formData['description'])
    uploadedData.append('task', formData['task'])
    uploadedData.append('priority', formData['priority'])
    uploadedData.append('user', this.userId)    // compulsary


    this.service.modalTask(this.idModal, uploadedData).subscribe((res: { statusCode: number, msg: string}) => {

      console.log(uploadedData)

      // this.loadPendingTasks()  //for displaying the values from api to the browser 

      if (res.statusCode == 202) {
        this.showSnackBar(res.msg, 'snackbarSuccess')
        console.log("inside")
        this.filteredList[this.tableId].description = formData['description'];
        this.filteredList[this.tableId].task = formData['task'];
        this.filteredList[this.tableId].priority = formData['priority'];
      }
      else {
        this.showSnackBar(res.msg, 'snackbarDanger')
        console.log("outside")
      }
    })

  }
}