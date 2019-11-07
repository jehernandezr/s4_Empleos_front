import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListComponent } from './estudiantes-list/estudiante-list.component';
import { EstudianteDetailComponent } from './estudiantes-detail/estudiante-detail.component';
import { EstudianteService } from './estudiante.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [EstudianteListComponent, EstudianteDetailComponent],
  providers: [EstudianteService]
})
export class EstudianteModule { }