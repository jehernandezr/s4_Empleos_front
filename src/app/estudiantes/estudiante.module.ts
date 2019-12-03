import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListComponent } from './estudiantes-list/estudiante-list.component';
import { EstudianteDetailComponent } from './estudiantes-detail/estudiante-detail.component';
import { EstudianteService } from './estudiante.service';
import { EstudianteCreateComponent } from "./estudiante-create/estudiante-create.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [EstudianteListComponent, EstudianteDetailComponent, EstudianteCreateComponent],
  exports: [EstudianteListComponent, EstudianteDetailComponent, EstudianteCreateComponent],
  providers: [EstudianteService]
})
export class EstudianteModule { }