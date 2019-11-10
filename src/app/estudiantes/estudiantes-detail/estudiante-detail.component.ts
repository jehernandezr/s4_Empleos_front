import { Component, OnInit, Input } from '@angular/core';
import { EstudianteDetail } from "../estudiante.detail";

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent implements OnInit {

  @Input() estudianteDetail: EstudianteDetail;
  constructor() { }

  ngOnInit() {
  }

}