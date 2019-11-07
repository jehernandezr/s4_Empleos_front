
import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import {CalificacionesModule} from './califiaciones/calificaciones.module';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
