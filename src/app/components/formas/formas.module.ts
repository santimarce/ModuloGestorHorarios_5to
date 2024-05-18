import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormregisterComponent } from './formregister/formregister.component';
import { FormstudentComponent } from './formstudent/formstudent.component';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BasicsModule } from '../basics/basics.module';

@NgModule({
  declarations: [
    FormloginComponent,
    FormregisterComponent,
    FormstudentComponent
  ],
  imports: [
    CommonModule,
    BasicsModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatLabel
  ],
  exports: [
    FormloginComponent,
    FormregisterComponent,
    FormstudentComponent
  ]
})
export class FormasModule { }
