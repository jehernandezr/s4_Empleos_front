import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Estudiante } from "./estudiante";
import { EstudianteDetail } from "./estudiante.detail";


const API_URL = "../../assets/";
const estudiantes = "estudiantes.json";
const estudiante = "estudiante";

@Injectable()
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(API_URL + estudiantes);
  }

  getEstudiante(id: number): Observable<EstudianteDetail> {
    return this.http.get<EstudianteDetail>(API_URL + estudiante + id + ".json");
  }

}