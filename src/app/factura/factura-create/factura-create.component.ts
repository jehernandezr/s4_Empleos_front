
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import { Factura } from '../factura';
import { FacturaService }from '../factura.service';
import {DatePipe} from '@angular/common';


@Component({
    selector: 'app-factura-create',
    templateUrl: './factura-create.component.html',
    styleUrls: ['./factura-create.component.css'],
    providers: [DatePipe]

    
})
export class FacturaCreateComponent implements OnInit {

  clientForm: FormGroup;

    /**
    * The new factura
    */
   facturas: Factura[];


    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param calificacionService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
     constructor(
         private dp: DatePipe,
        private facturaService: FacturaService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService
      ) {
        this.clientForm = this.formBuilder.group({
          fecha: [],
          valor: []
        });
      }
      /**
    * Creates an author
    */
   createFactura(newFac: Factura){
    console.log("Intentando crear factura");
    console.log(newFac);
    console.warn("el cliente fue creado", newFac);
/*
    let dateB: Date = new Date(newFac.fecha.year, newFac.fecha.month - 1, newFac.fecha.day,newFac.fecha.hours,newFac.fecha.minutes,newFac.fecha.seconds);

    newFac.fecha = this.dp.transform(dateB, 'yyyy-MM-ddThh:mm:ssTZD');
  */  
    console.warn("el cliente fue creado", newFac);
    this.facturaService.createFactura(newFac).subscribe(client => {
        this.facturas.push(client);
        this.showSuccess();
      });
      this.clientForm.reset();
    }

    
  showSuccess() {
    for (let i = 0; i < this.facturas.length; i++){
      console.log(this.facturas[i].id+' '+this.facturas[i].fecha+' '+this.facturas[i].valor);
    }
    this.toastr.success("Factura", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.facturaService
      .getFacturas()
      .subscribe(clientes => (this.facturas = clientes));
  }

}
