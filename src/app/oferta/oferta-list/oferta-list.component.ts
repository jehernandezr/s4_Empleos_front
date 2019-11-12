import { Component, OnInit, NgModule, Pipe, PipeTransform } from '@angular/core';
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
  onSelect(event){
    if(event.value=="1"){
     const ke: HTMLInputElement = document.getElementById('bussiness') as HTMLInputElement;
    
    }

  }
 

  numOfertas():number{
    return this.ofertas.length;
  }

  ofertas: Oferta[];
  getOfertas(): void {
        this.ofertaService.getOfertas().subscribe(ofertas => this.ofertas = ofertas);
    }

    carUnicas():string[]{
      var array:string[]= new Array();
      for(let o of this.ofertas){
        array.push(o.categoria);
      }
        var result : string[] = Array.from(new Set(array));
        return result    
      

    }

    contarCat(cat:String):number{
    let contador:number =0;
     for(let e of this.ofertas){
       if(cat==e.categoria){
         contador++;
       }
     }

     return contador;
    }
    
    getOfertasFiltradas(): void {

      const inputElement: HTMLInputElement = document.getElementById('filtro') as HTMLInputElement;
      const filtro:String = inputElement.value;
      this.ofertaService.getOfertasPalabraClave(filtro).subscribe(ofertas => this.ofertas = ofertas);
  }
  


   

  

}
