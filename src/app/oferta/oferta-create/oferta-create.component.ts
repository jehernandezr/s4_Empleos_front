import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from "../../tokenService";

@Component({
  selector: 'app-oferta-create',
  templateUrl: './oferta-create.component.html',
  styleUrls: ['./oferta-create.component.css']
})
export class OfertaCreateComponent implements OnInit {
  
token:string 
  constructor( private ofertaService:OfertaService, private toastr: ToastrService,private tokenService: TokenService, private formBuilder: FormBuilder,) 
  {
    
    this.clientForm = this.formBuilder.group({
      nombre: ["", [Validators.required ]],
      descripcion: ["", Validators.required],
      categoria: ["", Validators.required],
      estaAbierta:[],
      horario:["", Validators.required],
      horasDeTrabajo:[],
      numeroDeVacantes:[],
      pagoPorHora:[],
      porcentajePagoAdicional:[],
      requisitos:[],
      rutaImagen:[],
      tiempoMaximoAplicacion:[],
      tipoOferta:[],
      contratista:[] ,
      trabajo: [] ,
      estudiantes: this.formBuilder.array([]) ,
      token:[]

    });
    if(this.clientForm.get('porcentajePagoAdicional').value===null){
      this.clientForm.get('porcentajePagoAdicional').setValue(0);
    }
    if(this.clientForm.get('tiempoMaximoAplicacion').value===null){
      this.clientForm.get('tiempoMaximoAplicacion').setValue(0);
    }
    
    this.clientForm.get('estaAbierta').setValue(true);
    this.clientForm.get('trabajo').setValue({});
    this.clientForm.get('contratista').setValue({});
    this.token=this.tokenService.currentToken;
    this.clientForm.get('token').setValue(this.token );
    
  }


  clientForm: FormGroup;
  tipo:string;
 

  ofertas:Oferta[];

  createOferta(newClient: Oferta) {
    // Process checkout data here
    console.warn("la oferta fue creado", newClient);
    
    

    this.ofertaService.createOferta(newClient).subscribe(client => {
      this.ofertas.push(client);
      this.showSuccess();
    });

    
    
  }

  showSuccess() {
    for (let i = 0; i < this.ofertas.length; i++){
      console.log(this.ofertas[i].id+' '+this.ofertas[i].nombre+' '+this.ofertas[i].descripcion);
    }
    this.toastr.success("Oferta", "Creada exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    
    this.ofertaService
      .getOfertas()
      .subscribe(clientes => (this.ofertas = clientes));
      this.tipo = this.tokenService.currentTipo;
  }

}
