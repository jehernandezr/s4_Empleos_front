import { Oferta } from "../oferta/oferta";

export class Estudiante {
  id: number;
  carrera: string;
  calificacionPromedio: number;
  horarioDeTrabajo: string;
  correo: string;
  nombre: string;
  semestre: number;
  idMedioDepago: number;
  ofertas: Oferta[];
}