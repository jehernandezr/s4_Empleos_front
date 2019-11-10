import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Oferta } from './oferta';
import { OfertaDetail } from './oferta-detail/oferta-detail';
import { tap } from 'rxjs/operators';

const API_URL = "http://localhost:8080/s4_empleos-api/api/";
const ofertas = 'ofertas/';

@Injectable()
export class OfertaService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };


  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getOfertas() : Observable<Oferta[]> {
        return this.http.get<Oferta[]>(API_URL + ofertas);
    }

    getOfertaDetail(ofertaId): Observable<OfertaDetail> {
      console.log(ofertaId+" "+API_URL +ofertas+ ofertaId);
        return this.http.get<OfertaDetail>(API_URL + ofertas + ofertaId);
    }
    /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
   createOferta(oferta): Observable<Oferta> {
    return this.http.post<Oferta>(API_URL + ofertas, oferta, this.httpOptions).pipe(tap((oferta: Oferta) => console.log(`added oferta w/ ${oferta.nombre} id=${oferta.id}`)));
}

}