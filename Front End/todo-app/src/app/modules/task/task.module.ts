import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { MaterialModule } from '../material/material.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { HomeComponent } from './home/home.component';
import { PendingTaskComponent } from './pending-task/pending-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskComponent,
    AddtaskComponent,
    HomeComponent,
    PendingTaskComponent,
    CompleteTaskComponent,
   
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TaskModule { }
