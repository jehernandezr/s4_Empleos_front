
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {CommonModule} from '@angular/common';

import { TokenService } from "./tokenService";


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';

import { TarjetadecreditoModule } from './tarjetadecredito/tarjetadecredito.module';
import { CalificacionesModule } from './califiaciones/calificaciones.module';
import{  FacturaModule } from './factura/factura.module';


import { EstudianteModule } from "./estudiantes/estudiante.module";
import { EstudianteListComponent } from "./estudiantes/estudiantes-list/estudiante-list.component";
import { EstudianteDetailComponent } from "./estudiantes/estudiantes-detail/estudiante-detail.component";
import { EstudianteCreateComponent } from "./estudiantes/estudiante-create/estudiante-create.component";
import { EstudianteService } from "./estudiantes/estudiante.service";

import { OfertaModule } from "./oferta/oferta.module";

import { ContratistaModule } from './contratista/contratista.module';
import{CuentaDeCobroModule} from './cuenta-de-cobro/cuenta-de-cobro.module';
import { HomeModule } from "./home/home.module";
import { LandModule } from "./land/land.module";
import { AutenticacionModule } from "./autenticacion/autenticacion.module";
import { Token } from '@angular/compiler';

@NgModule({

    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CalificacionesModule,
        FacturaModule,
        TarjetadecreditoModule,
        CuentaDeCobroModule,
        AppRoutingModule,
        OfertaModule,
        HomeModule,
        AutenticacionModule,
        ContratistaModule,
        LandModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CommonModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }, EstudianteService, TokenService
    ]

})
export class AppModule { }
