import { Component, OnInit } from '@angular/core';

import { Oferta } from '../../oferta/oferta';
import { TokenService } from '../../tokenService';
import { ContratistaService } from '../../contratista/contratista.service';
import { Contratista } from 'src/app/contratista/contratista';

@Component({
    selector: 'land-contratista',
    templateUrl: './land-contratista.component.html',
    styleUrls: ['./land-contratista.component.css']
  })
  export class LandContratistaComponent implements OnInit {
  
    ofertas: Oferta[];
    id: number;
    token: string;
    contratista:Contratista;

    constructor(private tokenService: TokenService, private contratistaService: ContratistaService) { }
  
    ngOnInit() {
      this.id = this.tokenService.currentIdLog;
      this.token = this.tokenService.currentToken;
      this.contratistaService.getContratistaDetail(this.id).subscribe(con => {
        this.contratista=con;
        console.log(con);
        var offers = con.ofertas;
        this.ofertas = offers;
      })
    }
  
}