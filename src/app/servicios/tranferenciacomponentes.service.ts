import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranferenciacomponentesService {

  constructor() { }
  private datosCompartidos: any; // Almacena los datos compartidos

  // Método para obtener los datos compartidos
  getDatosCompartidos() {
    return this.datosCompartidos;
  }

  // Método para establecer los datos compartidos
  setDatosCompartidos(datos: any) {
    this.datosCompartidos = datos;
  }
}
