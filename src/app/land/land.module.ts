import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandComponent } from './land-component/land.component';
import { LandEstudianteComponent } from "./land-estudiante/land-estudiante.component";
import { LandContratistaComponent } from "./land-contratista/land-contratista.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ LandComponent, LandEstudianteComponent, LandContratistaComponent ],
})
export class LandModule { }