import { Component } from '@angular/core';
import { Carrera, Dias, Estado, Facultad, Jornada, Nivel, Paralelo, Rama, Rol, TipoAula } from '../../../models/catalogmodel';
import { Asignatura } from '../../../models/asignaturamodel';
import { Curso } from '../../../models/cursosmodel';
import { Teacher } from '../../../models/teachermodels';
import { Horario } from '../../../models/horariomodel';
import { Student } from '../../../models/studentmodel';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
  
export class IndexComponent {

  title = 'Gestión de Horarios';
  estudiante = student1;
  jornada = jornadaVespertina;
  horario = horariomatutino1;
  colorbtn = 'primary';
  title_button = 'Iniciar Sesion';

}

//hacer horariomatutino1 de la asignatura: programacion, docente: Hernan, dia: miercoles, curso: lab1 q es tipo laborario 
//docente Hernan es de rama desarrollo, en la facultada de informatica, q es rol administrador y su estado es activo

const asignaturaProgramacion: Asignatura = {
  id_asignatura: 1,
  nombre_asignatura: "Programacion"
}

const diaMiercoles: Dias = {
  id_dia: 1,
  nombre_dia: "Miercoles"

}

const tipoAulaLaboratorio: TipoAula = {
  id_tipoaula: 1,
  nombre_tipoaula: "Laboratorio"
}

const cursoLab1: Curso = {
  id_curso: "1",
  nombre_curso: "Lab1",
  capacidad_curso: 30,
  tipoAula: tipoAulaLaboratorio
}

const ramaDesarollo: Rama = {
  id_rama: 1,
  nombre_rama: "Desarrollo"
}

const facultadInformatica: Facultad = {
  id_facultad: 2,
  nombre_facultad: "Informatica"
}

const rolAdministrador: Rol = {
  id_rol: 3,
  nombre_rol: "Administrador"
}

const estadoActivo: Estado = {
  id_estado: 1,
  nombre_estado: "Activo"
}

const docenteHernan: Teacher = {
  id_docente: "1",
  nombres_docente: "Hernan",
  apellidos_docente: "Mejia",
  contacto_docente: "23787455",
  email_docente: "hm@gmail.com",
  contrasenia_docente: "12345",
  rama: ramaDesarollo,
  facultad: facultadInformatica,
  rol: rolAdministrador,
  estado: estadoActivo

}

const horariomatutino1: Horario = {
  id: "1",
  horainicio: "9:00",
  horafin: "13:00",
  asignatura: asignaturaProgramacion,
  docente: docenteHernan,
  dia: diaMiercoles,
  curso: cursoLab1
}
//student1, primer nivel de desarrollo, jornada: vespertina, paralelo: b

const jornadaVespertina: Jornada = {
  id_jornada: 1,
  nombre_jornada: "Vespertina"
}
const jornadaMatutina: Jornada = {
  id_jornada: 2,
  nombre_jornada: "Matutina"
}

const nivelPrimerNivelDesarrollo: Nivel = {
  id_nivel: 1,
  nombre_nivel: "Primer nivel desarrollo"
}

const paraleloB: Paralelo = {
  id_paralelo: 1,
  nombre_paralelo: "B"
}

const carreraDesarrolloS: Carrera = {
  id_carrera: 1,
  nombre_carrera: "DSoftware"
}

const student1: Student = {
  id_alumno: "1",
  nombres_alumno: "Stefany",
  apellidos_alumno: "Salazar",
  fechanacimiento_alumno: null,
  contacto_alumno: "237874874",
  direccion_alumno: "Los nuevos",
  email_alumno: "s@gmail.com",
  contrasenia_alumno: "1234",
  jornada: jornadaMatutina,
  nivel: nivelPrimerNivelDesarrollo,
  paralelo: paraleloB,
  carrera: carreraDesarrolloS

}