import { Component, Input } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-datepickerinput',
  standalone: false,
  providers: [provideNativeDateAdapter()],
  templateUrl: './datepickerinput.component.html',
  styleUrl: './datepickerinput.component.css'
})
export class DatepickerinputComponent { 
//arreglar el evento al abrir el calendario
@Input()
  title!: string;
  
}
