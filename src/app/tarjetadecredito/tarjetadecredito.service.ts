import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarjetas } from './tarjetass';
import { TarjetadecreditoDetail } from './tarjetadecreditodetail'
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const tarjetas1 = 'tarjetas.json';

@Injectable()
export class TarjetadecreditoService {

   constructor(private http: HttpClient) { }    
  
    getTarjetas() : Observable<Tarjetas[]> {
        return this.http.get<Tarjetas[]>(API_URL + tarjetas1);
    }

    getTarjetasDetail(tarjetaId): Observable<TarjetadecreditoDetail> {
        return this.http.get<TarjetadecreditoDetail>(API_URL + "tarjeta" + tarjetaId + ".json"
        );
      }

}