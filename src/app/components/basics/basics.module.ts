import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonsimpleComponent } from './botonsimple/botonsimple.component';
import { DatepickerinputComponent } from './datepickerinput/datepickerinput.component';
import { EmailinputComponent } from './emailinput/emailinput.component';
import { SelectinputComponent } from './selectinput/selectinput.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TextoinputComponent } from './textoinput/textoinput.component';
import { GrillaComponent } from './grilla/grilla.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    BotonsimpleComponent,
    DatepickerinputComponent,
    EmailinputComponent,
    SelectinputComponent,
    TextoinputComponent,
    GrillaComponent,
    NavbarComponent],
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
    ReactiveFormsModule,
    MatGridListModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    
  ],
  exports: [
    TextoinputComponent,
    BotonsimpleComponent,
    DatepickerinputComponent,
    EmailinputComponent,
    SelectinputComponent,
    GrillaComponent,
    NavbarComponent

  ]
})
export class BasicsModule { }
