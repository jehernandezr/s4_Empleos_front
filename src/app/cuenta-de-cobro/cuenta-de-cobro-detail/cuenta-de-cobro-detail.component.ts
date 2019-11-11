import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from "@angular/router";

import { CuentaDeCobroService } from "../cuenta-de-cobro.service";
import { CuentaDeCobroDetail } from "../cuenta-de-cobro-detail";
@Component({
  selector: 'app-cuenta-de-cobro-detail',
  templateUrl: './cuenta-de-cobro-detail.component.html',
  styleUrls: ['./cuenta-de-cobro-detail.component.css']
})
export class CuentaDeCobroDetailComponent implements OnInit {

 

    
    @Input() cuentaDeCobroDetail: CuentaDeCobroDetail;
   
    constructor() { }

    ngOnInit() {
    }
}





  