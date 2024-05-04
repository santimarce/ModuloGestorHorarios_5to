import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.css'
})
export class FormloginComponent {
  @Input() datos: DataIn = {
    title: 'hola',
    mail: '',
    password: ''
  }
  formlog: FormGroup = new FormGroup({
    mail: new FormControl('', Validators.required),
    pswrd: new FormControl('', Validators.required),
  });
}
export interface DataIn {
  title: string;
  mail: string;
  password: string;
}