import { TipoAula } from "./catalogmodel";

export interface Curso{
    id_curso: string,
    nombre_curso: string,
    capacidad_curso: number,
    tipoAula: TipoAula  
}
