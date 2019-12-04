import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { OfertaListComponent } from '../oferta/oferta-list/oferta-list.component';
import { OfertaDetailComponent } from '../oferta/oferta-detail/oferta-detail.component';

import { CalificacionesListComponent } from '../califiaciones/calificaciones-list/calificaciones-list.component';
import { CalificaionDetailComponent } from  '../califiaciones/calificaciones-detail/calificaciones-detail.component';
import { EstudianteListComponent } from '../estudiantes/estudiantes-list/estudiante-list.component';
import { EstudianteDetailComponent } from '../estudiantes/estudiantes-detail/estudiante-detail.component';
   
import { ContratistaListComponent } from '../contratista/contratista-list/contratista-list.component';
import { ContratistaDetailComponent } from '../contratista/contratista-detail/contratista-detail.component';

import { TarjetadecreditolistComponent } from '../tarjetadecredito/tarjetadecreditolist/tarjetadecreditolist.component';
import { TarjetadecreditoDetailComponent } from '../tarjetadecredito/tarjetadecreditodetail/tarjetadecreditodetail.component';
import{ CuentaDeCobroListComponent } from '../cuenta-de-cobro/cuenta-de-cobro-list/cuenta-de-cobro-list.component';
import{ CuentaDeCobroDetailComponent }from '../cuenta-de-cobro/cuenta-de-cobro-detail/cuenta-de-cobro-detail.component';

import{ FacturaListComponent } from '../factura/factura-list/factura-list.component';
import{ FacturaDetailComponent}from '../factura/factura-detail/factura-detail.component';

import{ HomeComponent } from '../home/home-component/home-component.component';
import { SignInComponent } from '../autenticacion/sign-in-component/sign-in-component.component';
import { SignUpComponent } from "../autenticacion/sign-up-component/sign-up-component.component";

import { LandComponent } from "../land/land-component/land.component";


const routes: Routes = [
  {
    path: "land",
    component: LandComponent
  },
    {
      path: "signin",
      component: SignInComponent
    },
    {
      path: "signup",
      component: SignUpComponent
    },
      {
        path: "tarjetas",
        children: [
      {
        path: ":list",
        component: TarjetadecreditolistComponent
      },
      {
        path: ":id",
        component: TarjetadecreditoDetailComponent,
        outlet: "detail"
      }

    ]
},
    {
      path: "home",
      component: HomeComponent
    },

    {
      path:"cuentas",
      children:[
        {
          path:'list',
          component: CuentaDeCobroListComponent
        },
        {
          path:':id',
          component: CuentaDeCobroDetailComponent,
          outlet: 'detail'
        }

      ]
    },
     {
        path: 'calificaciones',
        children:[
            {
                path:'list',
                component: CalificacionesListComponent
            },
            {
                path:':id',
                component:CalificaionDetailComponent,
                
            }
        ]
    },
    {
        path: 'ofertas',
        component:OfertaListComponent,
        children: [{
          path: ':a',
          component: OfertaListComponent
        },
        {
          path: ':id',
          component: OfertaDetailComponent,
         
        }
        ]
      },
      {
        path: 'oferta',
        
        children: [
        {
          path: ':id',
          component: OfertaDetailComponent,
         
        }
        ]
      },
      {
        path: 'contratistas',
        children: [{
          path: 'list',
          component: ContratistaListComponent
        },
        {
          path: ':id',
          component: ContratistaDetailComponent,
         
        }
        ]
      },
      {
        path: 'facturas',
        children: [{
          path: 'list',
          component: FacturaListComponent
        },
        {
          path: ':id',
          component: FacturaDetailComponent,
         
        }
        ]
      },{
        path: 'estudiantes',
        children:[
            {
                path:'list',
                component: EstudianteListComponent
            },
            /*{
                path:':id',
                component: EstudianteDetailComponent,
                outlet: 'detail'
            }*/
        ]
    }
      
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
