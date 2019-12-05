import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContratistaService } from '../contratista.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Contratista } from '../contratista';
import { Usuario } from "../../usuario";
import { AuthService } from "../../autenticacion/auth.service";
import { TokenService } from "../../tokenService";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contratista-create',
  templateUrl: './contratista-create.component.html',
  styleUrls: ['./contratista-create.component.css']
})
export class ContratistaCreateComponent implements OnInit {

  @Output() create = new EventEmitter<Contratista>();

  contratista:Contratista;
  constructor(private contratistaService:ContratistaService,private router: Router,private tokenService: TokenService, private toastr: ToastrService, private autenticacion: AuthService) 
  {
    
   
   

    
  }

  

  

  createContratista() {
    var nombre = (<HTMLInputElement> document.getElementById("nombre")).value;
    var ruta = (<HTMLInputElement> document.getElementById("rutaImagen")).value;
    
   
    var correo = (<HTMLInputElement> document.getElementById("email")).value;
    var pass = (<HTMLInputElement> document.getElementById("pass")).value;
    var usuario = new Usuario();
    usuario.nombre = nombre;
    usuario.carrera = "";
    usuario.email = correo;
    usuario.horarioDeTrabajo = "";
    usuario.semestre = 0;
    usuario.calificacionPromedio = 0;
    usuario.idMedioDepago = 0;
    usuario.rutaImagen = ruta;
    usuario.esExterno = false;
    usuario.id = 0;
    // Process checkout data here
    console.warn("El contratista fue creado", usuario);
    
    

    this.autenticacion.crear(usuario, correo, pass, 'Contratista').subscribe(user => {
      if(user != null) {
        var token = user.token;
        console.log(token);
        this.tokenService.changeToken(token);
        this.tokenService.changeTipo(user.tipo);
        this.tokenService.changeIdLog(user.idLog);
        if(token != "") {
          this.router.navigate(['/land', {}]);
        }
      }
    });
  
    
    
  }

 

  ngOnInit() {

   
  }

}
