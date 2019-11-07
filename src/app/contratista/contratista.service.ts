import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contratista } from './contratista';
import { ContratistaDetail } from './contratista-detail/contratista-detail';
const API_URL = "http://localhost:8080/s4_empleos-api/api/";
const contratistas = 'contratistas/';
@Injectable()
export class ContratistaService {

 
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }    
  
   getContratistas() : Observable<Contratista[]> {
       return this.http.get<Contratista[]>(API_URL + contratistas);
   }

   getOfertaDetail(contratistaId): Observable<ContratistaDetail> {
     console.log(contratistaId+" "+API_URL +contratistas+contratistaId);
       return this.http.get<ContratistaDetail>(API_URL +contratistas + contratistaId);
   }
}
