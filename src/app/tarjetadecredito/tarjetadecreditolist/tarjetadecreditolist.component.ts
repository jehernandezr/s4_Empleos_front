import { Component, OnInit } from '@angular/core';
import { Tarjetas } from '../tarjetass';
import { TarjetadecreditoService } from '../tarjetadecredito.service';


@Component({
  selector: 'app-tarjetadecreditolist',
  templateUrl: './tarjetadecreditolist.component.html',
  styleUrls: ['./tarjetadecreditolist.component.css']
})

export class TarjetadecreditolistComponent implements OnInit {

 
    constructor(private TarjetadecreditoService: TarjetadecreditoService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    tarjetas: Tarjetas[];

    /**
     * Asks the service to update the list of editorials
     */
    getTarjetas(): void {
        this.TarjetadecreditoService.getTarjetas().subscribe(o => this.tarjetas = o);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getTarjetas();
    }

}