import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormregisterComponent } from './formregister/formregister.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BasicsModule } from '../basics/basics.module';


@NgModule({
  declarations: [
    FormloginComponent,
    FormregisterComponent
  ],
  imports: [
    BasicsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormloginComponent,
    FormregisterComponent
  ]
})
export class FormasModule { }
