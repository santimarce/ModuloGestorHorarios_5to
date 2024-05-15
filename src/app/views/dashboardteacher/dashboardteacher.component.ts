import { Component } from '@angular/core';
import { ElementoListaNavbar } from '../../../models/drawclass';

@Component({
  selector: 'app-dashboardteacher',
  templateUrl: './dashboardteacher.component.html',
  styleUrls: ['./dashboardteacher.component.css']
})
export class DashboardteacherComponent {
  
   elementosnavbar: ElementoListaNavbar[] = [
    {
      nombre: "Docente",
      nombre_icono: "person"
    },
    {
      nombre: "Agregar Estudiante",
      nombre_icono: "person_add"
    },
    {
      nombre: "Modificar Horarios",
      nombre_icono: "calendar_today"
    }
   ]
}