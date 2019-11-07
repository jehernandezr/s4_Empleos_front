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
  avg: number;
  mayor: number;

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
        this.avg = 0;
        this.mayor = 0;
        this.estudiantes = estudiantes;
        for(var i = 0; i < estudiantes.length; i++) {
          this.avg += estudiantes[i].price;
          if(estudiantes[i].stars > 3.8) {
            this.mayor += 1;
          }
        }
        this.avg /= estudiantes.length;
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