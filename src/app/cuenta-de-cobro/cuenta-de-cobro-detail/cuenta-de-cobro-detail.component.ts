import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from "@angular/router";

import { CuentaDeCobroService } from "../cuenta-de-cobro.service";
import { CuentaDeCobroDetail } from "../cuenta-de-cobro-detail";
@Component({
  selector: 'app-cuenta-de-cobro-detail',
  templateUrl: './cuenta-de-cobro-detail.component.html'
})
export class CuentaDeCobroDetailComponent implements OnInit {

  constructor(private cuentaDeCobroService: CuentaDeCobroService,
    private route: ActivatedRoute) { }

    cuentaDeCobroDetail: CuentaDeCobroDetail;

    @Input() cuenta_id: number;
  
    loader: any;
  
    getCuentasDeCobroDetail(): void {
      this.cuentaDeCobroService.getCuentasDeCobroDetail(this.cuenta_id).subscribe(o => {
        this.cuentaDeCobroDetail = o;
      });
    }
  
    onLoad(params) {
      this.cuenta_id= parseInt(params["id"]);
      this.cuentaDeCobroDetail = new CuentaDeCobroDetail();
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





  