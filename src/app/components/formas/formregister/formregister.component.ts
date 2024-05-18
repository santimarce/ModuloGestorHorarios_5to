import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrl: './formregister.component.css'
})
export class FormregisterComponent {
  @Input()
  title!: string;

  formreg: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    fechanacimiento: new FormControl('', Validators.required),
    contacto: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    jornada: new FormControl('', Validators.required),
    nivel: new FormControl('', Validators.required),
    paralelo: new FormControl('', Validators.required),
    carrera: new FormControl('', Validators.required),
  });
}
