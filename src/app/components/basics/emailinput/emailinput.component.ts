import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emailinput',
  standalone: false,
  templateUrl: './emailinput.component.html',
  styleUrl: './emailinput.component.css'
})
export class EmailinputComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @Input()
  title!: string;
  
} 
