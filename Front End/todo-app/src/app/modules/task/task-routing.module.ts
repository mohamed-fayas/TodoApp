import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { AddtaskComponent } from './addtask/addtask.component';

import { PendingTaskComponent } from './pending-task/pending-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: TaskComponent, canActivate:[AuthGuard], children: [
    {path: 'addtask', component:AddtaskComponent},
    {path: 'home', component:HomeComponent},
    {path: 'pending',component:PendingTaskComponent},
    {path: 'complete',component:CompleteTaskComponent}
  ]},

   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
