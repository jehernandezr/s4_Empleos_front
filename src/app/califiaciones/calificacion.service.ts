import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Calificacion} from './calificacion';
import { CalificacionDetail } from './calificacionDetail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from "rxjs/operators";


const API_URL2 = environment.apiURL+"/";
const calificaciones2 = 'calificaciones/';

@Injectable({ providedIn: "root" })
export class CalificacionService {
 
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getCalificaciones() : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL2 + calificaciones2);
    }

    getCalificacionDetail(calificacionId) : Observable<CalificacionDetail> {
        return this.http.get<CalificacionDetail>(API_URL2 + "calificaciones" + calificacionId);
    }
    /*
    createCalificacion(calificacion): Observable<Calificacion> {
        return this.http.post<Calificacion>(API_URL2 + calificaciones2, calificacion);
    }*/

    createCalificacion(calificacion: Calificacion): Observable<Calificacion> {
        return this.http.post<Calificacion>(API_URL2+calificaciones2, calificacion, this.httpOptions).pipe(tap((cal: Calificacion) => console.log(`added calificacion w/ ${cal.nota} id=${cal.id}`)));
      }
    

}