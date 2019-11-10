import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Factura} from './factura';
import { FacturaDetail } from './facturaDetail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from "rxjs/operators";

const API_URL2 = environment.apiURL+"/";
const facturas = 'facturas/';

@Injectable({ providedIn: "root" })
export class FacturaService {
 
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getFacturas() : Observable<Factura[]> {
        return this.http.get<Factura[]>(API_URL2 + facturas);
    }

    getFacturaDetail(facturaId) : Observable<FacturaDetail> {
        return this.http.get<FacturaDetail>(API_URL2 + "facturas" + facturaId);
    }

    createFactura(factura: Factura): Observable<Factura> {
        return this.http.post<Factura>(API_URL2+facturas, factura, this.httpOptions).pipe(tap((fac: Factura) => console.log(`added factura w/ ${fac.valor} id=${fac.id}`)));
      }
    

}