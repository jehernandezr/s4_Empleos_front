import { Component, OnInit, NgModule, Pipe, PipeTransform, Input } from '@angular/core';
import {OfertaService} from '../oferta.service';
import { Oferta } from '../oferta';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OfertaDetail } from '../oferta-detail/oferta-detail';
import { map, filter } from 'rxjs/operators';

import { TokenService } from "../../tokenService";



@Component({
  selector: 'oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  token: string;
  tipo:string;

  constructor(private ofertaService: OfertaService, private router:Router, private tokenService: TokenService, private route: ActivatedRoute) { }

  @Input() palabra: String;
  @Input() offers: Oferta[];
  selectedOferta: OfertaDetail;
  
  loader:any;
 
  onSelect(event){
    if(event.value=="1"){
     const ke: HTMLInputElement = document.getElementById('bussiness') as HTMLInputElement;
    
    }

  }

  goTo(id) {
    this.router.navigate(['/oferta/' + id, {}]);
  }
 

  numOfertas():number{

    return this.ofertas.length;
  }

  ofertas: Oferta[];
  getOfertas(): void {
        this.ofertaService.getOfertas().subscribe(ofertas => this.ofertas = ofertas);
    }

    filtrarOnApp1():void{
      const inputElement: HTMLInputElement = document.getElementById('filtro') as HTMLInputElement;
      const filtro:String = inputElement.value;
      this.ofertaService.getOfertasPalabraClave(filtro).subscribe(ofertas => this.ofertas = ofertas);
    }

    filtrarOnApp2():void{
      const inputElement: HTMLInputElement = document.getElementById('filtro') as HTMLInputElement;
      const filtro:String = inputElement.value;
      this.ofertaService.getOfertasPalabraClave(filtro).subscribe(ofertas => this.ofertas = ofertas);
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
    
    getOfertasFiltradas(pal:String): void {

     
      this.ofertaService.getOfertasPalabraClave(pal).subscribe(ofertas => this.ofertas = ofertas);
  }

  onLoad(params) {

    this.palabra = params['a'];
    console.log(" en detail " + this.palabra);
    
  }
  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
  ngOnInit() {
    

    
   
     
      
      this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
      this.route.queryParams.subscribe(params => {
        if(this.offers == undefined) {
        const palabra = params['a'];
        console.log('a',palabra);
        if(palabra===undefined)
        this.getOfertas();
        else
        this.getOfertasFiltradas(palabra);
      } else {
        this.ofertas = this.offers;
      }
      });
    
      
     
     
    this.token = this.tokenService.currentToken;
    this.tipo = this.tokenService.currentTipo;
    console.log("token: " + this.token);
    

  }
  ngOnDestroy() {
    this.loader.unsubscribe();
  }
  


   

  

}
