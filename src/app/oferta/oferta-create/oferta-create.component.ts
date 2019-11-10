import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-oferta-create',
  templateUrl: './oferta-create.component.html',
  styleUrls: ['./oferta-create.component.css']
})
export class OfertaCreateComponent implements OnInit {

  constructor( private ofertaService:OfertaService, private toastr: ToastrService, private formBuilder: FormBuilder,) 
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
      contratista: this.formBuilder.array([]) ,
      trabajo: this.formBuilder.array([]) ,
      estudiantes: this.formBuilder.array([]) 

    });
  }


  clientForm: FormGroup;

  ofertas:Oferta[];

  createOferta(newClient: Oferta) {
    // Process checkout data here
    console.warn("la oferta fue creado", newClient);

    this.ofertaService.createOferta(newClient).subscribe(client => {
      this.ofertas.push(client);
      this.showSuccess();
    });
    this.clientForm.reset();
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
  }

}
