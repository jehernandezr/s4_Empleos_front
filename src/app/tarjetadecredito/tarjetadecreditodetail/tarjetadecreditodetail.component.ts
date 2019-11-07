import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Tarjetas } from "../tarjetass";
import { TarjetadecreditoService } from "../tarjetadecredito.service";
import { TarjetadecreditoDetail } from "../tarjetadecreditodetail";

@Component({
  selector: "app-tarjetadecreditodetail",
  templateUrl: "./tarjetadecreditodetail.component.html",
  styleUrls: ["./tarjetadecreditodetail.component.css"]
})

export class TarjetadecreditoDetailComponent implements OnInit {

  constructor(
    private tarjetadecreditoService: TarjetadecreditoService,
    private route: ActivatedRoute
  ) {}

  tarjetadecreditoDetail: TarjetadecreditoDetail;

  @Input() tarjeta_id: number;

  loader: any;

  getTarjetasDetail(): void {
    this.tarjetadecreditoService.getTarjetasDetail(this.tarjeta_id).subscribe(o => {
      this.tarjetadecreditoDetail = o;
    });
  }

  onLoad(params) {
    this.tarjeta_id = parseInt(params["id"]);
    this.tarjetadecreditoDetail = new TarjetadecreditoDetail();
    this.getTarjetasDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}