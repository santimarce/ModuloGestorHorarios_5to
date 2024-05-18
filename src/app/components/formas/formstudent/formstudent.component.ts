import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formstudent',
  templateUrl: './formstudent.component.html',
  styleUrl: './formstudent.component.css'
})
export class FormstudentComponent {

  estudianteForm: FormGroup;

  constructor() {
    this.estudianteForm = new FormGroup({
      cedula: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl('')
    });
  }

  ngOnInit(): void {
    // ... código de inicialización
  }

  onSubmit(): void {
    // Manejar el envío del formulario
    console.log(this.estudianteForm.value);
  }
}
