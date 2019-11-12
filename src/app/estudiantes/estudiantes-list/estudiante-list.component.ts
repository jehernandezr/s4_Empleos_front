import { Component, OnInit } from '@angular/core';
import { EstudianteService } from "../estudiante.service";
import { Estudiante } from "../estudiante";
import { EstudianteDetail } from "../estudiante.detail";

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {

  estudiantes: Estudiante[];

  modalOn: boolean;

  selectedDetail: EstudianteDetail;

  clickCreate() {
    console.log("entrè");
    this.modalOn = true;
  }

  constructor(private estudianteService: EstudianteService) {
    this.modalOn = false;
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