import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetadecreditolistComponent } from './tarjetadecreditolist/tarjetadecreditolist.component';
import { TarjetadecreditoService } from './tarjetadecredito.service';
import { TarjetadecreditoDetailComponent } from './tarjetadecreditodetail/tarjetadecreditodetail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [TarjetadecreditolistComponent, TarjetadecreditoDetailComponent],
  exports: [TarjetadecreditolistComponent],
  providers: [TarjetadecreditoService]
})
export class TarjetadecreditoModule { }