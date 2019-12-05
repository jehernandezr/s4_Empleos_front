import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Estudiante } from "../estudiante";
import { EstudianteService } from "../estudiante.service";
import { Usuario } from "../../usuario";
import { AuthService } from "../../autenticacion/auth.service";
import { TokenService } from "../../tokenService";
import { Router } from "@angular/router";

@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {

  @Output() create = new EventEmitter<Estudiante>();

  estudiante: Estudiante;

  constructor(private router: Router, private tokenService: TokenService, private estudianteService: EstudianteService, private autenticacion: AuthService) { }

  ngOnInit() {
  }

  createEstudiante() {
    var nombre = (<HTMLInputElement> document.getElementById("nombre")).value;
    var horarioDeTrabajo = (<HTMLInputElement> document.getElementById("horarioDeTrabajo")).value;
    var semestre = parseInt((<HTMLInputElement> document.getElementById("semestre")).value);
    var carrera = (<HTMLInputElement> document.getElementById("carrera")).value;
    var correo = (<HTMLInputElement> document.getElementById("correo")).value;
    var pass = (<HTMLInputElement> document.getElementById("pass")).value;
    if(this.check(nombre, horarioDeTrabajo, semestre, carrera, correo)) {

      // VIEJO
      /*var estudiante = new Estudiante();
      estudiante.nombre = nombre;
      estudiante.carrera = carrera;
      estudiante.correo = correo;
      estudiante.horarioDeTrabajo = horarioDeTrabajo;
      estudiante.semestre = semestre;
      estudiante.calificacionPromedio = 0;

      this.estudianteService.createEstudiante(estudiante).subscribe(estudiante => {
        console.log(estudiante);
        this.estudiante = estudiante;
        this.create.emit(estudiante);
      });
      */

      //NUEVO
      var usuario = new Usuario();
      usuario.nombre = nombre;
      usuario.carrera = carrera;
      usuario.email = correo;
      usuario.horarioDeTrabajo = horarioDeTrabajo;
      usuario.semestre = semestre;
      usuario.calificacionPromedio = 0;
      usuario.idMedioDepago = 0;
      usuario.rutaImagen = "";
      usuario.esExterno = false;
      usuario.id = 0;

      this.autenticacion.crear(usuario, correo, pass, 'Estudiante').subscribe(user => {
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

    } else {
      alert("No puede dejar campos vacíos o introducir un correo con dominio diferente a uniandes.edu.co");
    }

  }

  check(nombre:string, horarioDeTrabajo: string, semestre: number, carrera: string, correo: string): boolean {
    var ok = true;
    if(nombre == "" || horarioDeTrabajo == "" || carrera == "" || correo == "" || semestre < 1 || semestre > 12) {
      ok = false;
    }
    if(!correo.endsWith("@uniandes.edu.co")) {
      ok = false;
    }
    return ok;
  }

}