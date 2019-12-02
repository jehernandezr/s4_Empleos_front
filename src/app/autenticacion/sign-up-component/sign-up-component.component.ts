import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../auth.service";
import { TokenService } from "../../tokenService"
import { Router } from '@angular/router';

@Component({
    selector: 'sign-up-component',
    templateUrl: './sign-up-component.component.html',
    styleUrls: ['./sign-up-component.component.css']
  })
  export class SignUpComponent implements OnInit {

    selected: string;
  
    constructor(private signInService: AuthService, private tokenService: TokenService, private router: Router) { }
  
    ngOnInit() {
      var token = this.tokenService.currentToken;
      if(token != "" && token != undefined && token != null) {
        this.router.navigate(['/land', {}]);
      }
    }

    selectTipo(tipo) {
      this.selected = tipo;
    }
  }