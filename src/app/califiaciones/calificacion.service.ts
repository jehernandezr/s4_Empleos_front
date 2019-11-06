import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Calificacion} from './calificacion';
import { CalificacionDetail } from './calificacionDetail';
import { Observable } from 'rxjs';
const API_URL = '../../assets/';
const calificaciones = 'calificaciones.json';

@Injectable()
export class CalificacionService {
 
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getCalificaciones() : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }

    getCalificacionDetail(calificacionId) : Observable<CalificacionDetail> {
        return this.http.get<CalificacionDetail>(API_URL + "calificacion" + calificacionId+".json");
    }

}