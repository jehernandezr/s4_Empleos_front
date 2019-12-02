import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratistaListComponent } from './contratista-list/contratista-list.component';
import { ContratistaDetailComponent } from './contratista-detail/contratista-detail.component';
import { ContratistaService } from './contratista.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContratistaCreateComponent } from './contratista-create/contratista-create.component';
@NgModule({
  imports: [
    CommonModule, HttpClientModule, AppRoutingModule, FormsModule,ReactiveFormsModule
  ],
  declarations: [ContratistaListComponent, ContratistaDetailComponent, ContratistaCreateComponent ],
  exports: [ContratistaListComponent,ContratistaDetailComponent, ContratistaCreateComponent],
  providers: [ContratistaService]
})
export class ContratistaModule { }
