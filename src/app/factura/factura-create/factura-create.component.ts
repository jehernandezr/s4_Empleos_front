
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
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

   factura:Factura;

   
       /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new author
   */
   @Output() create = new EventEmitter();


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
          fecha: [""],
          valor: [""]
        });
      }

    
  

    createFactura2():Factura{
      console.log("Intentando crear factura");
      console.log(this.factura);
      console.warn("el cliente fue creado", this.factura);
      var fecha = (<HTMLInputElement>document.getElementById("facturaDate")).value + "T00:00:00-00:00";
      var valor = (<HTMLInputElement>document.getElementById("valor")).value;
      console.log(fecha);
      console.log(valor);
      
      this.factura.fecha = fecha;
      this.factura.valor = parseInt(valor);
  
      console.warn("el cliente fue creado", this.factura);
      this.facturaService.createFactura(this.factura).subscribe(client => {
          this.factura = client;
          this.create.emit();
          this.toastr.success("el cliente fue creado", "Factura creation");
        });
        this.clientForm.reset();  
        return this.factura;

      }


  ngOnInit() {
    this.factura=new Factura();
    
  }

}
