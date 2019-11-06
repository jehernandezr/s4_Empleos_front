import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../oferta.service';
import { OfertaDetail } from '../oferta-detail';


@Component({
  selector: 'app-oferta-detail',
  templateUrl: './oferta-detail.component.html',
  styleUrls: ['./oferta-detail.component.css']
})
export class OfertaDetailComponent implements OnInit {

  constructor(private ofertaService: OfertaService,
    private route: ActivatedRoute) { }

    @Input() ofertaDetail: OfertaDetail;

    oferta_id: number;

    getOfertaDetail(): void {
      this.ofertaService.getOfertaDetail(this.oferta_id)
        .subscribe(ofertaDetail => {
          this.ofertaDetail = ofertaDetail
        });
    }



  ngOnInit() {
    this.oferta_id = +this.route.snapshot.paramMap.get('id');
    if (this.oferta_id) {
      this.ofertaDetail = new OfertaDetail();
      this.getOfertaDetail();
    }

  }

}