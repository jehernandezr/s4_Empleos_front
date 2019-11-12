import {Component, OnInit, ViewContainerRef,Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd,Params} from '@angular/router';
import {ModalDialogService} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


import { Factura } from '../factura';
import { FacturaService }from '../factura.service';
import { FacturaDetail } from '../facturaDetail';

@Component({
    selector: 'app-factura-detail',
    templateUrl: './factura-detail.component.html',
    styleUrls: ['./factura-detail.component.css']
  })
  export class FacturaDetailComponent implements OnInit {
  

    constructor(private facturaService:FacturaService,
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
  
      /**
    * The calificacion whose details we want to show
    */
   facturaDetail: FacturaDetail;
  
     /**
    * The editorial's id retrieved from the address
    */
   @Input() factura_id: number;
  
      loader: any;
      
      /**
    * The other calificaciones shown in the sidebar
    */
   otras_facturas: Factura[];

    /**
    * The suscription which helps to know when a new calificacion
    * needs to be loaded
    */
   navigationSubscription;

      /**
    * The method which retrieves the books of an editorial
    */
    getFacturaDetail(): void {
      this.facturaService.getFacturaDetail(this.factura_id)
        .subscribe(p => {
          this.facturaDetail = p
        });
    }

        /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
   getOtherFacturas(): void {
    this.facturaService.getFacturas()
        .subscribe(cals => {
            this.otras_facturas = cals;
            this.otras_facturas = this.otras_facturas.filter(cals => cals.id !== this.factura_id);
        });
}
  
    onLoad(params) {
  
      this.factura_id = parseInt(params['id']);
      console.log(" en detail " + this.factura_id);
      this.facturaDetail = new FacturaDetail();
      this.getFacturaDetail();
    }
    ngOnInit() {
      this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    }
  
    ngOnDestroy() {
      this.loader.unsubscribe();
    }
  }