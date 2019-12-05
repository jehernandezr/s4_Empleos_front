import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandComponent } from './land-component/land.component';
import { LandEstudianteComponent } from "./land-estudiante/land-estudiante.component";
import { LandContratistaComponent } from "./land-contratista/land-contratista.component";
import { OfertaModule } from '../oferta/oferta.module';
import { ContratistaModule } from '../contratista/contratista.module';

@NgModule({
  imports: [
    CommonModule,
    OfertaModule,
    ContratistaModule
  ],
  declarations: [ LandComponent, LandEstudianteComponent, LandContratistaComponent ],
})
export class LandModule { }