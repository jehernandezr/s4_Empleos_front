
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import { Calificacion } from '../calificacion';
import { CalificacionService }from '../calificacion.service';

@Component({
    selector: 'app-calificacion-create',
    templateUrl: './calificaciones-create.component.html',
    styleUrls: ['./calificaciones-create.component.css'],
})
export class CalificacionCreateComponent implements OnInit {

  clientForm: FormGroup;

    /**
    * The new calificacion
    */
   calificaciones: Calificacion[];


    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param calificacionService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
     constructor(
        private calificacionService: CalificacionService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService
      ) {
        this.clientForm = this.formBuilder.group({
          nota: [],
          comentario: []
        });
      }
      /**
    * Creates an author
    */
   createCalificacion(newCal: Calificacion){

    console.warn("el cliente fue creado", newCal);

    this.calificacionService.createCalificacion(newCal).subscribe(client => {
        this.calificaciones.push(client);
        this.showSuccess();
      });
      this.clientForm.reset();
    }

    
  showSuccess() {
    for (let i = 0; i < this.calificaciones.length; i++){
      console.log(this.calificaciones[i].id+' '+this.calificaciones[i].nota+' '+this.calificaciones[i].comentario);
    }
    this.toastr.success("Calificacion", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.calificacionService
      .getCalificaciones()
      .subscribe(clientes => (this.calificaciones = clientes));
  }

}
