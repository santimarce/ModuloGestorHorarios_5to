import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormregisterComponent } from './formregister/formregister.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { BasicsModule } from '../basics/basics.module';
import { FormestudiantesinComponent } from './formestudiantesin/formestudiantesin.component';



@NgModule({
  declarations: [
    FormloginComponent,
    FormregisterComponent,
    FormestudiantesinComponent
  ],
  imports: [
    BasicsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    FormControl, 
    FormGroup,
    MatLabel

    
  ],
  exports: [
    FormloginComponent,
    FormregisterComponent,
    FormestudiantesinComponent
  ]
})
export class FormasModule { }
