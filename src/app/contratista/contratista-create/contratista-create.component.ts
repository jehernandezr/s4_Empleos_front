import { Component, OnInit } from '@angular/core';
import { ContratistaService } from '../contratista.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Contratista } from '../contratista';

@Component({
  selector: 'app-contratista-create',
  templateUrl: './contratista-create.component.html',
  styleUrls: ['./contratista-create.component.css']
})
export class ContratistaCreateComponent implements OnInit {

  constructor(private contratistaService:ContratistaService, private toastr: ToastrService, private formBuilder: FormBuilder) 
  {
    this.clientForm = this.formBuilder.group({
     email: ["", [Validators.required ]],
      esExterno: [],
      nombre: [],
      rutaImagen:[],
    
      cuentaDeCobro:this.formBuilder.array([])  ,
      ofertas: this.formBuilder.array([])  ,
     

    });
    
    
  }

  clientForm: FormGroup;

  contratistas:Contratista[];

  createContratista(newClient: Contratista) {
    // Process checkout data here
    console.warn("la oferta fue creado", newClient);
    
    

    this.contratistaService.createContratista(newClient).subscribe(client => {
      this.contratistas.push(client);
      this.showSuccess();
    });

    
    
  }

  showSuccess() {
    for (let i = 0; i < this.contratistas.length; i++){
      console.log(this.contratistas[i].id+' '+this.contratistas[i].nombre+' '+this.contratistas[i].email);
    }
    this.toastr.success("Oferta", "Creada exitosamente!", {"progressBar": true,timeOut:4000});
   
  }

  ngOnInit() {

    this.contratistaService
      .getContratistas()
      .subscribe(clientes => (this.contratistas = clientes));
  }

}
