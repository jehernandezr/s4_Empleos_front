import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertaListComponent } from './oferta-list/oferta-list.component';
import { OfertaDetailComponent } from './oferta-detail/oferta-detail.component';
import { OfertaService } from './oferta.service';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [OfertaListComponent, OfertaDetailComponent, ],
  exports: [OfertaListComponent, OfertaDetailComponent],
  providers: [OfertaService]

})
export class OfertaModule { }