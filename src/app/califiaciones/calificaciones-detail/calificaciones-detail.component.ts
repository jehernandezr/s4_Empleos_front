import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Calificacion } from '../calificacion';
import { CalificacionService }from '../calificacion.service';
import { CalificacionDetail } from '../calificacionDetail';

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './calificaciones-detail.component.html',
    styleUrls: ['./calificaciones-detail.component.css']
  })
  export class CalificaionDetailComponent implements OnInit {
  

    constructor(private calificaionService:CalificacionService, private route: ActivatedRoute) { }
  
      /**
    * The calificacion whose details we want to show
    */
    @Input() calificacionDetail: CalificacionDetail;
  
     /**
    * The editorial's id retrieved from the address
    */
    calificacion_id: number;
  
      loader: any;
  
  
      /**
    * The method which retrieves the books of an editorial
    */
    getCalificacionDetail(): void {
      this.calificaionService.getCalificacionDetail(this.calificacion_id)
        .subscribe(p => {
          this.calificacionDetail = p
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
    }
  
    ngOnDestroy() {
      this.loader.unsubscribe();
    }
  }