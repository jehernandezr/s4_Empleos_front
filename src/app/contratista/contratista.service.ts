import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contratista } from './contratista';
import { ContratistaDetail } from './contratista-detail/contratista-detail';
import { tap } from 'rxjs/operators';
const API_URL = "http://localhost:8080/s4_empleos-api/api/";
const contratistas = 'contratistas/';
@Injectable()
export class ContratistaService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

 
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }    
  
   getContratistas() : Observable<Contratista[]> {
       return this.http.get<Contratista[]>(API_URL + contratistas);
   }

   getContratistaDetail(contratistaId): Observable<ContratistaDetail> {
     console.log(contratistaId+" "+API_URL +contratistas+contratistaId);
       return this.http.get<ContratistaDetail>(API_URL +contratistas + contratistaId);
   }

   /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
   createContratista(contratista): Observable<Contratista> {
    return this.http.post<Contratista>(API_URL + contratistas, contratista, this.httpOptions).pipe(tap((contratista: Contratista) => console.log(`added oferta w/ ${contratista.nombre} id=${contratista.id}`)));
}

}
