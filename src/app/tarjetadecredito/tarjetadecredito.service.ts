import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tarjetas } from './tarjetass';
import { TarjetadecreditoDetail } from './tarjetadecreditodetail'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const API_URL = 'http://localhost:8080/s4_empleos-api/api/';
const tarjetas1 = 'tarjetas/';

@Injectable()
export class TarjetadecreditoService {

    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };

   constructor(private http: HttpClient) { }    
  
    getTarjetas() : Observable<Tarjetas[]> {
        return this.http.get<Tarjetas[]>(API_URL + tarjetas1);
    }

    getTarjetasDetail(tarjetaId): Observable<TarjetadecreditoDetail> {
        return this.http.get<TarjetadecreditoDetail>(API_URL + tarjetas1 + tarjetaId 
        );
      }

    createTarjeta(tarjeta): Observable<Tarjetas> {
        return this.http.post<Tarjetas>(API_URL + tarjetas1, tarjeta, this.httpOptions).pipe(tap((tarjeta: Tarjetas) => console.log(`added tarjeta w/ ${tarjeta.nombre} id=${tarjeta.id}`)));
    }

}