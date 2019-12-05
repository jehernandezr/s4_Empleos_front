import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Estudiante } from "./estudiante";
import { EstudianteDetail } from "./estudiante.detail";


const API_URL = "../../assets/";
const estudiantes = "estudiantes.json";
const estudiante = "estudiante";

const API = "http://localhost:8080/s4_empleos-api/api/estudiantes/"

@Injectable()
export class EstudianteService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(API);
  }

  getEstudiante(id: number, token: string): Observable<EstudianteDetail> {
    return this.http.get<EstudianteDetail>(API + id + "?token=" + token);
  }

  createEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(API, estudiante, this.httpOptions);
  }

}