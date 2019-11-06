import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CalificacionesListComponent } from './calificaciones-list/calificaciones-list.component';
import { CalificaionDetailComponent } from './calificaciones-detail/calificaciones-detail.component';

import { CalificacionService } from './calificacion.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [CalificacionesListComponent,CalificaionDetailComponent],
  exports: [CalificacionesListComponent],
  providers: [CalificacionService]
})
export class CalificacionesModule { }