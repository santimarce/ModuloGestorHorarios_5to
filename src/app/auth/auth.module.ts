import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpswComponent } from './forgotpsw/forgotpsw.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpswComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
