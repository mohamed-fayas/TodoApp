import { Component } from '@angular/core';
import { TaskserviceService } from '../service/taskservice.service';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.css']
})
export class CompleteTaskComponent {
 
  constructor(private service: TaskserviceService) { }
  taskList: any[] = []
  userId: any
  searchText: string = ''
  showSpinner = false

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.loadCompletedTasks()
  }

  loadCompletedTasks() {
    this.service.fetchTasks(this.userId, 'completed').subscribe((res: { statusCode: number, tasks: any[], msg: string }) => {
      this.taskList = res.tasks
      // console.log(this.taskList, this.userId)
    })
  }

  searchItems(){
    console.log(this.searchText)
    setTimeout(() => {
      this.showSpinner = true
    }, 1000);
   
    setTimeout(() => {
    
      
       this.service.searchTask(this.userId, this.searchText).subscribe((res: { statusCode: number, searchResult: any[], msg: string }) => {

      this.taskList = res.searchResult
      // console.log(this.taskList)
     
    })
    this.showSpinner = false
    }, 2000);
   

  } 
}
