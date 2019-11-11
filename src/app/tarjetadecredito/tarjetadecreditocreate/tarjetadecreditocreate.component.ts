import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TarjetadecreditoService } from '../tarjetadecredito.service';
import { Tarjetas } from '../tarjetass';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-tarjeta-create',
    templateUrl: './tarjetadecreditocreate.component.html',
    styleUrls: ['./tarjetadecreditocreate.component.css']
  })
export class TarjetadecreditoCreateComponent implements OnInit {
    
    
    
    constructor( private tarjetasService:TarjetadecreditoService, private toastr: ToastrService, private formBuilder: FormBuilder,) 
  {
    this.clientForm = this.formBuilder.group({
      cvc: [],
      fecha:[],
      numero:[],
    });
  }

    clientForm: FormGroup;

    tarjetas:Tarjetas[];
  
    createTarjeta(newClient: Tarjetas) {
      // Process checkout data here
      console.warn("la tarjeta fue agregada", newClient);
  
      this.tarjetasService.createTarjeta(newClient).subscribe(client => {
        this.tarjetas.push(client);
        this.showSuccess();
      });
      this.clientForm.reset();
    }
  
    showSuccess() {
      for (let i = 0; i < this.tarjetas.length; i++){
        console.log(this.tarjetas[i].id+' '+this.tarjetas[i].nombre+' '+this.tarjetas[i].cvc);
      }
      this.toastr.success("Tarjeta", "Agregada exitosamente!", {"progressBar": true,timeOut:4000});
     
    }

    ngOnInit() {
        this.tarjetasService
          .getTarjetas()
          .subscribe(o => (this.tarjetas = o));
      }
}
