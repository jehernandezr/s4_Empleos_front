import { Component, OnInit } from '@angular/core';
import { TokenService } from "../../tokenService";
import { Router } from '@angular/router';

@Component({
    selector: 'land',
    templateUrl: './land.component.html',
    styleUrls: ['./land.component.css']
  })
  export class LandComponent implements OnInit {

    tipo: string;
    token: string;
  
    constructor(private tokenService: TokenService, private router: Router) { }
  
    ngOnInit() {
      this.tipo = this.tokenService.currentTipo;
      this.token = this.tokenService.currentTipo;
      if(this.token == "" || this.token == undefined || this.token == null) {
        this.router.navigate(['/signin', {}]);
      }
    }
  
}