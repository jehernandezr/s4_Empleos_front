import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "./token";
import { Usuario } from '../usuario';

const API = "http://localhost:8080/s4_empleos-api/api/credenciales"

@Injectable()
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  autenticar(email:String, pass:String): Observable<Token> {
    return this.http.get<Token>(API + "?correo=" + email + "&pass=" + pass);
  }

  crear(usuario: Usuario, email: string, pass: string, tipo: string ): Observable<Token> {
    return this.http.post<Token>(API + "?correo=" + email + "&pass=" + pass + "&tipo=" + tipo, usuario, this.httpOptions);
  }
}