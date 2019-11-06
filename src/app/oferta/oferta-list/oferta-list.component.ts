import { Component, OnInit, NgModule } from '@angular/core';
import {OfertaService} from '../oferta.service';
import { Oferta } from '../../oferta';
import { Router } from '@angular/router';
import { OfertaDetail } from '../oferta-detail';



@Component({
  selector: 'oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  constructor(private ofertaService: OfertaService, private router:Router) { }

  oferta_id: number;
  selectedOferta: OfertaDetail;
  ngOnInit() {
    this.getOfertas();
  }

  ofertas: Oferta[];
  getOfertas(): void {
        this.ofertaService.getOfertas().subscribe(ofertas => this.ofertas = ofertas);
    }

    onSelected(oferta_id: number): void {
      this.oferta_id = oferta_id;
      this.selectedOferta = new OfertaDetail();
      this.ofertaService.getOfertaDetail(oferta_id).subscribe(o => this.selectedOferta = o);
    }

}