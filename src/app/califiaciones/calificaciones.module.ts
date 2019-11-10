import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CalificacionesListComponent } from './calificaciones-list/calificaciones-list.component';
import { CalificaionDetailComponent } from './calificaciones-detail/calificaciones-detail.component';
import { CalificacionCreateComponent } from './calificaciones-create/calificaciones-create.component';

import { CalificacionService } from './calificacion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [CalificacionesListComponent,CalificaionDetailComponent,CalificacionCreateComponent],
  providers: [CalificacionService],
  exports: [CalificacionesListComponent]

})
export class CalificacionesModule { }