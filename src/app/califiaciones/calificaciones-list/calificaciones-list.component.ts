import { Component, OnInit } from '@angular/core';
import {Calificacion} from '../calificacion';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'list-calificaciones',
  templateUrl: './calificaciones-list.component.html',
  styleUrls: ['./calificaciones-list.component.css']
})
export class CalificacionesListComponent implements OnInit {

  constructor(private calificacionService: CalificacionService) { }

  calificaciones: Calificacion[] = [];

  getCalificaciones(): void {
        this.calificacionService.getCalificaciones().subscribe((cals)=>
            this.calificaciones = cals);
    }

  ngOnInit() {
    this.getCalificaciones();
  }


}