import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Oferta } from '../oferta';

const API_URL = "../../assets/";
const ofertas = 'oferta.json';

@Injectable()
export class OfertaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getOfertas() : Observable<Oferta[]> {
        return this.http.get<Oferta[]>(API_URL + ofertas);
    }

}