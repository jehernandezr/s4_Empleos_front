import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params,Router,NavigationEnd } from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService} from 'ngx-modal-dialog';

import {CuentaDeCobro} from '../cuenta-de-cobro';
import { CuentaDeCobroService } from "../cuenta-de-cobro.service";
import { CuentaDeCobroDetail } from "../cuenta-de-cobro-detail";
import { from } from 'rxjs';
@Component({
  selector: 'app-cuenta-de-cobro-detail',
  templateUrl: './cuenta-de-cobro-detail.component.html',
  styleUrls: ['./cuenta-de-cobro-detail.component.css']
})
export class CuentaDeCobroDetailComponent implements OnInit {

 
  
    constructor(
      private cuentadeCobroService: CuentaDeCobroService,
      private route: ActivatedRoute,
      private modalDialogService: ModalDialogService,
      private router: Router,
      private viewRef: ViewContainerRef,
      private toastrService: ToastrService) {

        
      //This is added so we can refresh the view when one of the books in
      //the "Other books" list is clicked
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
            this.ngOnInit();
        }
    }); }
      
    @Input() cuenta_id: number;

    cuenta2:CuentaDeCobroDetail;
  
    loader: any;

    otras_cuentas: CuentaDeCobro[];


        /**
    * The suscription which helps to know when a new calificacion
    * needs to be loaded
    */
   navigationSubscription;
  
    getCuentasDeCobroDetail(): void {
      this.cuentadeCobroService.getCuentasDeCobroDetail(this.cuenta_id).subscribe(o => {
        this.cuenta2 = o;
      });
    }
  
         /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
   getOtherFacturas(): void {
    this.cuentadeCobroService.getCuentasDeCobro()
        .subscribe(cals => {
            this.otras_cuentas = cals;
            this.otras_cuentas = this.otras_cuentas.filter(cals => cals.id !== this.cuenta_id);
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





  