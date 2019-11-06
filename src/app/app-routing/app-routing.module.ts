import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { OfertaListComponent } from '../oferta/oferta-list/oferta-list.component';
import { OfertaDetailComponent } from '../oferta/oferta-detail/oferta-detail.component';

const routes: Routes = [

    
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    {
        path: 'ofertas',
        children: [{
          path: 'list',
          component: OfertaListComponent
        },
        {
          path: ':id',
          component: OfertaDetailComponent,
          outlet: 'detail'
        }
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
