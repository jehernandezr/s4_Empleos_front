import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaListComponent } from './oferta-list/oferta-list.component';
import { OfertaDetailComponent } from './oferta-detail/oferta-detail.component';
import { OfertaService } from './oferta.service';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  declarations: [OfertaListComponent, OfertaDetailComponent ],
  exports: [OfertaListComponent, OfertaDetailComponent],
  providers: [OfertaService]

})
export class OfertaModule { }