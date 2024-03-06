import { Carrera, Jornada, Nivel, Paralelo } from "./catalogmodel";

export interface Student {
    id_alumno: string;
    nombres_alumno: string;
    apellidos_alumno: string;
    fechanacimiento_alumno: Date | null;
    contacto_alumno: string;
    direccion_alumno: string;
    email_alumno: string;
    contrasenia_alumno: string;
    jornada: Jornada;
    nivel: Nivel;
    paralelo: Paralelo;
    carrera: Carrera;

    // presentacion(): string;
}
// export class Student_cls implements Student {
//     id_alumno: string;
//     nombres_alumno: string;
//     apellidos_alumno: string;
//     fechanacimiento_alumno: Date | null;
//     contacto_alumno: string;
//     direccion_alumno: string;
//     email_alumno: string;
//     contrasenia_alumno: string;
//     jornada: Jornada;
//     nivel: Nivel;
//     paralelo: Paralelo;
//     carrera: Carrera;

// constructor (){
    
// }
//     presentacion(): string {
//         throw new Error("Method not implemented.");
//     }
// }
//  presentacion (): string {
//     let saludo: string = 'Hola mi nombre es' + nombre + ' ' + apellido;
//     return saludo;



