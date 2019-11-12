import { Component, OnInit } from '@angular/core';
import { ContratistaService } from '../contratista.service';
import { Router } from '@angular/router';
import { Contratista } from '../contratista';
import { ContratistaDetail } from '../contratista-detail/contratista-detail';

@Component({
  selector: 'app-contratista-list',
  templateUrl: './contratista-list.component.html',
  styleUrls: ['./contratista-list.component.css']
})
export class ContratistaListComponent implements OnInit {

  constructor(private contratistaService: ContratistaService, private router:Router) { }
  contratistas: Contratista[];
  selectedOferta: ContratistaDetail;
 
  ngOnInit() {
    this.getContratista();
    
    
  }

   numContratistas():number{
     return this.contratistas.length;
   }

  
  getContratista(): void {
        this.contratistaService.getContratistas().subscribe(contratista => this.contratistas = contratista);
    }
    
}
