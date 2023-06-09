import { Component, ViewChild } from '@angular/core';
import { TaskserviceService } from '../service/taskservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],
 
})
export class AddtaskComponent {
constructor(private service: TaskserviceService, private snackbar: MatSnackBar){} 
@ViewChild('form') taskForm: any

userId: any

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') || null
  }

  
  taskSubmit(formData: any) {
      
    const uploadedData = new FormData()

    uploadedData.append('task', formData['task'])
    uploadedData.append('description', formData['description'])
    uploadedData.append('priority', formData['priority'])
    uploadedData.append('user', this.userId)

    this.service.addTask(uploadedData).subscribe((res: { statusCode: number, msg: string }) => {
      if (res.statusCode == 201) {
        
        this.showSnackBar(res.msg, 'snackBarSuccess')
        
        this.taskForm.reset()
      }
      else{
        
        this.showSnackBar(res.msg, 'snackBarDanger')
      }
    })
  }

  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
}


}
