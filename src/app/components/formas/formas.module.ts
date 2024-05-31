import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormregisterComponent } from './formregister/formregister.component';
import { FormstudentComponent } from './formstudent/formstudent.component';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BasicsModule } from '../basics/basics.module';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormdocentesComponent } from './formdocentes/formdocentes.component';


@NgModule({
  declarations: [
    FormloginComponent,
    FormregisterComponent,
    FormstudentComponent,
    FormdocentesComponent
  ],
  imports: [
    CommonModule,
    BasicsModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatLabel,
    MatDatepicker,
    MatSelect,
    MatOption,
    MatDatepickerToggle
  ],
  exports: [
    FormloginComponent,
    FormregisterComponent,
    FormstudentComponent
  ]
})
export class FormasModule { }
