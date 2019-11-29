import { Component, OnInit, Input } from '@angular/core';
import { SignInService } from "../sing-in.service";
import { TokenService } from "../../tokenService"

@Component({
    selector: 'sign-in-component',
    templateUrl: './sign-in-component.component.html',
    styleUrls: ['./sign-in-component.component.css']
  })
  export class SignInComponent implements OnInit {
  
    constructor(private signInService: SignInService, private tokenService: TokenService) { }
  
    ngOnInit() {
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
            if(token != "") {
              alert("Login exitoso");          
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