import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetadecreditolistComponent } from './tarjetadecreditolist/tarjetadecreditolist.component';
import { TarjetadecreditoService } from './tarjetadecredito.service';
import { TarjetadecreditoDetailComponent } from './tarjetadecreditodetail/tarjetadecreditodetail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarjetadecreditoCreateComponent } from './tarjetadecreditocreate/tarjetadecreditocreate.component';
import { HttpClientModule} from "@angular/common/http";



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, ReactiveFormsModule
  ],
  declarations: [TarjetadecreditolistComponent, TarjetadecreditoDetailComponent, TarjetadecreditoCreateComponent],
  exports: [TarjetadecreditolistComponent, TarjetadecreditoCreateComponent],
  providers: [TarjetadecreditoService]
})
export class TarjetadecreditoModule { }