import { Component, OnInit, Input } from '@angular/core';
import { EstudianteService } from "../estudiante.service";
import { Estudiante } from "../estudiante";
import { EstudianteDetail } from "../estudiante.detail";
import { EstudianteCreateComponent } from '../estudiante-create/estudiante-create.component';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {

  estudiantes: Estudiante[];

  estudiante: Estudiante;

  modalOn: boolean;

  selectedDetail: EstudianteDetail;

  clickCreate() {
    this.modalOn = true;
  }

  activateModal() {
    this.modalOn = true;
  }

  receiveMessage($event) {
    this.estudiantes.push($event);
    this.modalOn = false;
  }

  constructor(private estudianteService: EstudianteService) {
    this.modalOn = false;
    this.estudiantes = new Array();
  }

  getEstudiante(id:number): void {
    /*this.estudianteService.getEstudiante(id).subscribe(estudiante => {
      this.selectedDetail = estudiante;
    });*/
    for(var ind = 0; ind < this.estudiantes.length; ind++) {
      if(this.estudiantes[ind].id == id) {
        this.selectedDetail = this.estudiantes[ind];
      }
    }
  }

  getEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(estudiantes => 
    {
      if(estudiantes.length > 0) {
        this.estudiantes = estudiantes;
      }
    });
  }

  ngOnInit() {
    this.getEstudiantes();
  }

  onSelected(id: number) {
    this.getEstudiante(id);
  }

}