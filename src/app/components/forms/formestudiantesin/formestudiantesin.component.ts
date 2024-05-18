import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formestudiantesin',
  templateUrl: './formestudiantesin.component.html',
  styleUrls: ['./formestudiantesin.component.css'],
})
export class FormestudiantesinComponent implements OnInit {

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