import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in-component/sign-in-component.component';
import { AuthService } from './auth.service';
import { SignUpComponent } from './sign-up-component/sign-up-component.component';
import { ContratistaModule } from "../contratista/contratista.module";
import { EstudianteModule } from '../estudiantes/estudiante.module';



@NgModule({
  imports: [
    CommonModule,
    ContratistaModule,
    EstudianteModule
  ],
  declarations: [SignInComponent, SignUpComponent, ],
  providers: [AuthService]
})
export class AutenticacionModule { }