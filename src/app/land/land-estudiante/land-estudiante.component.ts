import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../oferta/oferta';
import { TokenService } from '../../tokenService';
import { EstudianteService } from '../../estudiantes/estudiante.service';

@Component({
    selector: 'land-estudiante',
    templateUrl: './land-estudiante.component.html',
    styleUrls: ['./land-estudiante.component.css']
  })
  export class LandEstudianteComponent implements OnInit {
  
    ofertas: Oferta[];
    id: number;
    token: string;

    constructor(private tokenService: TokenService, private estudianteService: EstudianteService) { }
  
    ngOnInit() {
      this.id = this.tokenService.currentIdLog;
      this.token = this.tokenService.currentToken;
      this.estudianteService.getEstudiante(this.id, this.token).subscribe(estudiante => {
        console.log(estudiante);
        var offers = estudiante.ofertas;
        this.ofertas = offers;
      })
    }
  
}