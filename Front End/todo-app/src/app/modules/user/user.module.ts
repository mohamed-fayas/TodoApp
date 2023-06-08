import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AsyncEmailValidator } from 'src/app/validators/email.validator';

@NgModule({
  declarations: [
    UserComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
    AsyncEmailValidator
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MaterialModule
    
    
  ]
})  
export class UserModule { }
