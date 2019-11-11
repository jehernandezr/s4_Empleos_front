import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from '../oferta.service';
import { OfertaDetail } from './oferta-detail';



@Component({
  selector: 'app-oferta-detail',
  templateUrl: './oferta-detail.component.html',
  styleUrls: ['./oferta-detail.component.css']
})
export class OfertaDetailComponent implements OnInit {

  constructor(private ofertaService: OfertaService,
    private route: ActivatedRoute) { }

     ofertaDetail: OfertaDetail;

     @Input() oferta_id: number;

     loader:any;

    getOfertaDetail(): void {
      this.ofertaService.getOfertaDetail(this.oferta_id)
        .subscribe(ofertaDetail => {
          this.ofertaDetail = ofertaDetail
        });
    }



    onLoad(params) {

      this.oferta_id = parseInt(params['id']);
      console.log(" en detail " + this.oferta_id);
      this.ofertaDetail = new OfertaDetail();
      this.getOfertaDetail();
    }
    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
      
       this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
      
  
    }
    ngOnDestroy() {
      this.loader.unsubscribe();
    }

}