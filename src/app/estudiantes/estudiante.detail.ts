import { Estudiante } from "./estudiante";

export class EstudianteDetail extends Estudiante {
  id: number;
  carrera: string;
  calificacionPromedio: number;
  horarioDeTrabajo: string;
  correo: string;
  nombre: string;
  semestre: number;
  idMedioDepago: number;
}