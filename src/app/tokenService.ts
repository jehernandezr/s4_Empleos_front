import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenService {

  private token = new BehaviorSubject('');
  private tipo = new BehaviorSubject('');
  public currentToken = "";
  public currentTipo = "";

  constructor() { }

  changeToken(t1) {
    this.token.next(t1);
    this.currentToken = t1;
  }

  changeTipo(t1) {
    this.tipo.next(t1);
    this.currentTipo = t1;
  }

}