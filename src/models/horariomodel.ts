import { Time } from "@angular/common";
import { Asignatura } from './asignaturamodel';
import { Teacher } from "./teachermodels";
import { Carrera, Dias, Estado, Facultad, Jornada, Nivel, Paralelo, Rama, Rol, TipoAula } from './catalogmodel';
import { Curso } from "./cursosmodel";
import { Student } from "./studentmodel";

export interface Horario{     //clase
    id: string;
    horainicio: string;
    horafin: string;
    asignatura: Asignatura;
    docente: Teacher;
    dia: Dias;
    curso: Curso;
}





