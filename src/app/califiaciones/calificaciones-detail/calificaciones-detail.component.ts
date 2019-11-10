import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef,Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd,Params} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


import { Calificacion } from '../calificacion';
import { CalificacionService }from '../calificacion.service';
import { CalificacionDetail } from '../calificacionDetail';

@Component({
    selector: 'app-calificacion-detail',
    templateUrl: './calificaciones-detail.component.html',
    styleUrls: ['./calificaciones-detail.component.css']
  })
  export class CalificaionDetailComponent implements OnInit {
  

    constructor(private calificaionService:CalificacionService,
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
    calificacionDetail: CalificacionDetail;
  
     /**
    * The editorial's id retrieved from the address
    */
   @Input() calificacion_id: number;
  
      loader: any;
      
      /**
    * The other calificaciones shown in the sidebar
    */
   otras_calificaciones: Calificacion[];

    /**
    * The suscription which helps to know when a new calificacion
    * needs to be loaded
    */
   navigationSubscription;

      /**
    * The method which retrieves the books of an editorial
    */
    getCalificacionDetail(): void {
      this.calificaionService.getCalificacionDetail(this.calificacion_id)
        .subscribe(p => {
          this.calificacionDetail = p
        });
    }

        /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
   getOtherCalificaciones(): void {
    this.calificaionService.getCalificaciones()
        .subscribe(cals => {
            this.otras_calificaciones = cals;
            this.otras_calificaciones = this.otras_calificaciones.filter(cals => cals.id !== this.calificacion_id);
        });
}
  
    onLoad(params) {
  
      this.calificacion_id = parseInt(params['id']);
      console.log(" en detail " + this.calificacion_id);
      this.calificacionDetail = new CalificacionDetail();
      this.getCalificacionDetail();
    }
    ngOnInit() {
      this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
      //this.calificacion_id =+ this.route.snapshot.paramMap.get('id');
    }
  
    ngOnDestroy() {
      this.loader.unsubscribe();
    }
  }