import { Component, OnInit, NgModule } from '@angular/core';
import {OfertaService} from '../oferta.service';
import { Oferta } from '../../oferta';



@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.getOfertas();
  }

  ofertas: Oferta[];
  getOfertas(): void {
        this.ofertaService.getOfertas().subscribe(ofertas => this.ofertas = ofertas);
    }

}