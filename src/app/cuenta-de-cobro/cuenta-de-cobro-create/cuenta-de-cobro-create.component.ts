import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CuentaDeCobro } from '../cuenta-de-cobro';
import { CuentaDeCobroService } from '../cuenta-de-cobro.service';
import { CuentaDeCobroDetail } from '../cuenta-de-cobro-detail';


@Component({
    selector: 'app-cuenta-de-cobro-create',
    templateUrl: './cuenta-de-cobro-create.component.html',
    styleUrls: ['./cuenta-de-cobro-create.component.css']
  })
export class CuentaDeCobroCreateComponent implements OnInit {
    
    
  cuenta:CuentaDeCobroDetail;
    constructor( private cuentasDeCobroService:CuentaDeCobroService, 
      private toastr: ToastrService, 
      private formBuilder: FormBuilder) 
  {
    this.clientForm = this.formBuilder.group({
      nombreEstudiante:[],
      fecha:[""],
      valor:[],
    });

    this.clientForm = new FormGroup({
      valor:new FormControl(),
      nombreEstudiante: new FormControl(),
      fecha: new FormControl()
      
   });
  }

    clientForm: FormGroup;

    cuentas:CuentaDeCobro[];
  
    createCuentaDeCobro(newClient: CuentaDeCobro) {
      // Process checkout data here

      var fecha = (<HTMLInputElement>document.getElementById("fecha")).value + "T00:00:00-00:00";
      newClient.fecha=fecha
      this.cuentasDeCobroService.createCuentaDeCobro(newClient).subscribe(client => {
        this.cuentas.push(client);
        this.showSuccess();
      });
      this.clientForm.reset();
      console.warn("la cuenta de cobro fue agregada", newClient);
    }
  
    showSuccess() {
      for (let i = 0; i < this.cuentas.length; i++){
        console.log(this.cuentas[i].id+' '+this.cuentas[i].nombreEstudiante+' '+this.cuentas[i].valor);
      }
      this.toastr.success("Cuenta de Cobro", "Agregada exitosamente!", {"progressBar": true,timeOut:4000});
     
    }

    ngOnInit() {
        this.cuentasDeCobroService
          .getCuentasDeCobro()
          .subscribe(o => (this.cuentas = o));
      }
}
