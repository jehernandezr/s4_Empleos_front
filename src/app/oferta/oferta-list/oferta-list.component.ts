import { Component, OnInit, NgModule } from '@angular/core';
import {OfertaService} from '../oferta.service';
import { Oferta } from '../oferta';
import { Router } from '@angular/router';
import { OfertaDetail } from '../oferta-detail/oferta-detail';
import { map, filter } from 'rxjs/operators';



@Component({
  selector: 'oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  constructor(private ofertaService: OfertaService, private router:Router) { }

  
  selectedOferta: OfertaDetail;
  ngOnInit() {
    this.getOfertas();
    
    
  }

  numOfertas():number{
    return this.ofertas.length;
  }

  ofertas: Oferta[];
  getOfertas(): void {
        this.ofertaService.getOfertas().subscribe(ofertas => this.ofertas = ofertas);
    }

   

  

}