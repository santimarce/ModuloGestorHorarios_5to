import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TranferenciacomponentesService } from '../../../servicios/tranferenciacomponentes.service';

@Component({
  selector: 'app-textoinput',
  templateUrl: './textoinput.component.html',
  styleUrl: './textoinput.component.css'
})
export class TextoinputComponent {
  @Input() title!: string;
  @Input() colorinp!: ThemePalette;

  datosRecibidos: any; // Almacena los datos recibidos del servicio

  constructor(private tranferencia: TranferenciacomponentesService) { }

  ngOnInit() {
    // Obtener los datos compartidos del servicio
    this.datosRecibidos = this.tranferencia.getDatosCompartidos();
  }
}
