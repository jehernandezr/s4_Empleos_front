import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaDeCobroListComponent } from './cuenta-de-cobro-list/cuenta-de-cobro-list.component';
import{CuentaDeCobroDetailComponent}from './cuenta-de-cobro-detail/cuenta-de-cobro-detail.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CuentaDeCobroListComponent,CuentaDeCobroDetailComponent],
  exports:[CuentaDeCobroListComponent,CuentaDeCobroDetailComponent]
})
export class CuentaDeCobroModule { }