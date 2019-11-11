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

 
  
    constructor(
      private cuentadeCobroService: CuentaDeCobroService,
      private route: ActivatedRoute
    ) {}
    @Input() cuenta_id: number;
    cuenta2:CuentaDeCobroDetail;
  
  
    loader: any;
  
    getCuentasDeCobroDetail(): void {
      this.cuentadeCobroService.getCuentasDeCobroDetail(this.cuenta_id).subscribe(o => {
        this.cuenta2 = o;
      });
    }
  
    onLoad(params) {
      this.cuenta_id = parseInt(params['id']);
      console.log(" en detail " + this.cuenta_id);
      this.cuenta2 = new CuentaDeCobroDetail();
      this.getCuentasDeCobroDetail();
    }
  
    ngOnInit() {
      this.loader = this.route.params.subscribe((params: Params) =>
        this.onLoad(params)
      );
    }
  
    ngOnDestroy() {
      this.loader.unsubscribe();
    }
}





  