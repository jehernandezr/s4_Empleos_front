import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenService {

  private token = new BehaviorSubject('');
  public currentToken = "";

  constructor() { }

  changeToken(t1) {
    this.token.next(t1);
    this.currentToken = t1;
  }

}