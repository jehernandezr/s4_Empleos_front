import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../auth.service";
import { TokenService } from "../../tokenService"
import { Router } from '@angular/router';

@Component({
    selector: 'sign-in-component',
    templateUrl: './sign-in-component.component.html',
    styleUrls: ['./sign-in-component.component.css']
  })
  export class SignInComponent implements OnInit {
  
    constructor(private signInService: AuthService, private tokenService: TokenService, private router: Router) { }
  
    ngOnInit() {
      var token = this.tokenService.currentToken;
      if(token != "" && token != undefined && token != null) {
        this.router.navigate(['/land', {}]);
      }
    }

    signin() {
      var email = (<HTMLInputElement>document.getElementById("email")).value;
      var pass = (<HTMLInputElement>document.getElementById("pass")).value;
      if(email != "" && email != undefined && pass != "" && pass != undefined) {
        this.signInService.autenticar(email, pass).subscribe(user => {
          console.log(user);
          if(user != null) {
            var token = user.token;
            console.log(token);
            this.tokenService.changeToken(token);
            this.tokenService.changeTipo(user.tipo);
            this.tokenService.changeIdLog(user.idLog);
            if(token != "") {
              this.router.navigate(['/land', {}]);
            }
          } else {
            alert("Credenciales incorrectas");
          }
        });
      } else {
        alert("No deje ningun campo vacio");
      }
    }
  
  }