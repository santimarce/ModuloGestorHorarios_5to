import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonsimpleComponent } from './botonsimple/botonsimple.component';
import { DatepickerinputComponent } from './datepickerinput/datepickerinput.component';
import { EmailinputComponent } from './emailinput/emailinput.component';
import { SelectinputComponent } from './selectinput/selectinput.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TextoinputComponent } from './textoinput/textoinput.component';


@NgModule({
  declarations: [
    BotonsimpleComponent,
    DatepickerinputComponent,
    EmailinputComponent,
    SelectinputComponent,
    TextoinputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TextoinputComponent,
    BotonsimpleComponent,
    DatepickerinputComponent,
    EmailinputComponent,
    SelectinputComponent
  ]
})
export class BasicsModule { }
