import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CalificacionesComponent } from './calificaciones-list/calificaciones-list.component';
import { CalificacionService } from './calificacion.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [CalificacionesComponent],
  exports: [CalificacionesComponent],
  providers: [CalificacionService]
})
export class CalificacionesModule { }