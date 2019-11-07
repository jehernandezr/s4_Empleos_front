import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Oferta } from './oferta';
import { OfertaDetail } from './oferta-detail/oferta-detail';

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

    getOfertaDetail(ofertaId): Observable<OfertaDetail> {
      console.log(ofertaId+" "+API_URL + "oferta-" + ofertaId+".json");
        return this.http.get<OfertaDetail>(API_URL + "oferta-" + ofertaId+".json");
    }

}