import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranferenciacomponentesService } from '../../../servicios/tranferenciacomponentes.service';


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
  constructor(private tranferencia: TranferenciacomponentesService){}
  datosParaCompartir: any;
  ngOnInit() {
    // Establecer los datos compartidos en el servicio
    this.tranferencia.setDatosCompartidos(this.datosParaCompartir);
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