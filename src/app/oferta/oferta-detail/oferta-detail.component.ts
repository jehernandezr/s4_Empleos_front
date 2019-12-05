import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfertaService } from '../oferta.service';
import { OfertaDetail } from './oferta-detail';
import { TokenService } from '../../tokenService';
import { EstudianteService } from '../../estudiantes/estudiante.service';



@Component({
  selector: 'app-oferta-detail',
  templateUrl: './oferta-detail.component.html',
  styleUrls: ['./oferta-detail.component.css']
})
export class OfertaDetailComponent implements OnInit {

  constructor(private ofertaService: OfertaService,
    private route: ActivatedRoute, private tokenService: TokenService, private router: Router, private estudianteService: EstudianteService) {
      console.log("On constructor");
     }

     ofertaDetail: OfertaDetail;

     @Input() oferta_id: number;

     loader:any;

    getOfertaDetail(): void {
      this.ofertaService.getOfertaDetail(this.oferta_id)
        .subscribe(ofertaDetail => {
          console.log("retrieved");
          this.ofertaDetail = ofertaDetail
        });
    }

    aplicar(id) {
      console.log(id);
      var token = this.tokenService.currentToken;
      if(token != undefined && token != null && token != ""){
        var tipo = this.tokenService.currentTipo;
        if(tipo == "Estudiante") {
          this.estudianteService.getEstudiante(this.tokenService.currentIdLog, this.tokenService.currentToken).subscribe(estudiante => {
            this.ofertaService.aplicar(estudiante, id, this.tokenService.currentIdLog, this.tokenService.currentToken).subscribe(algo => {
              console.log("here");
              this.router.navigate(['/land', {}]);
            });
          });
          
        } else {
          alert("Debes haber iniciado sesión como estudiante, no como contratista, para acceder a esta función.");
        }
      } else {
        this.router.navigate(['/signin', {}]);
      }
    }



    onLoad(params) {

      this.oferta_id = parseInt(params['id']);
      console.log(" en detail " + this.oferta_id);
      this.ofertaDetail = new OfertaDetail();
      this.getOfertaDetail();
    }
    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
      
       this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
      
  
    }
    ngOnDestroy() {
      this.loader.unsubscribe();
    }

}