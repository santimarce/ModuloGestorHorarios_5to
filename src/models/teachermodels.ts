import { Estado, Facultad, Rama, Rol } from "./catalogmodel";

export interface Teacher {
    id_docente: string;
  nombres_docente: string;
  apellidos_docente: string;
  contacto_docente: string;
  email_docente: string;
  contrasenia_docente: string;

 rama: Rama,
 facultad: Facultad,  
 estado: Estado,
 rol: Rol,  

}
export interface UpdateTeacher extends Omit<Teacher, 'id_docente'> {
    // No se incluye el campo id_docente
  }

