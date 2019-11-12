import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Estudiante } from "../estudiante";
import { EstudianteService } from "../estudiante.service";

@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {

  @Output() create = new EventEmitter<Estudiante>();

  estudiante: Estudiante;

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
  }

  createEstudiante() {
    var nombre = (<HTMLInputElement> document.getElementById("nombre")).value;
    var horarioDeTrabajo = (<HTMLInputElement> document.getElementById("horarioDeTrabajo")).value;
    var semestre = parseInt((<HTMLInputElement> document.getElementById("semestre")).value);
    var carrera = (<HTMLInputElement> document.getElementById("carrera")).value;
    var correo = (<HTMLInputElement> document.getElementById("correo")).value;
    if(this.check(nombre, horarioDeTrabajo, semestre, carrera, correo)) {
      var estudiante = new Estudiante();
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