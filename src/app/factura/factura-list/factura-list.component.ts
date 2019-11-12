import { Component, OnInit } from '@angular/core';
import {Factura} from '../factura';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'list-facturas',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  constructor(private facturaService: FacturaService) { }

  facturas: Factura[] = [];

  getFacturas(): void {
        this.facturaService.getFacturas().subscribe((facs)=>
            this.facturas = facs);
    }

  ngOnInit() {
    this.getFacturas();
  }


  getCantidadFacturas(): number{
    
    return this.facturas.length;
  }

  getCantidadDinero(): number{
    let cant =0;
    for(let i=0; i < this.facturas.length; i=i+1)
    {
      cant = cant + (this.facturas[i].valor);
    }

    return cant;
  }


}