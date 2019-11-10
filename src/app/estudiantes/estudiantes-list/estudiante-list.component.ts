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

  selectedDetail: EstudianteDetail;

  constructor(private estudianteService: EstudianteService) { }

  getEstudiante(id:number): void {
    this.estudianteService.getEstudiante(id).subscribe(estudiante => {
      this.selectedDetail = estudiante;
    });
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