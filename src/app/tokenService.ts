import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenService {

  private token = new BehaviorSubject('');
  private tipo = new BehaviorSubject('');
  private idLog = new BehaviorSubject('');
  public currentToken = "";
  public currentTipo = "";
  public currentIdLog = -1;

  constructor() { }

  changeToken(t1) {
    this.token.next(t1);
    this.currentToken = t1;
  }

  changeTipo(t1) {
    this.tipo.next(t1);
    this.currentTipo = t1;
  }

  changeIdLog(t1) {
    this.idLog.next(t1);
    this.currentIdLog = t1;
  }

}