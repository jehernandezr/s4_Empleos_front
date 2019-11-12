import { Component,ViewContainerRef , OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router,NavigationEnd,  Params } from "@angular/router";
import {ModalDialogService} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


import {Tarjetas} from '../tarjetass'
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
    private route: ActivatedRoute,  
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) {this.navigationSubscription = this.router.events.subscribe((e: any) => {
    if (e instanceof NavigationEnd) {
        this.ngOnInit();
    }
}); }

  

  tarjetadecreditoDetail: TarjetadecreditoDetail;

  @Input() tarjeta_id: number;

  loader: any;

 /**
    * The suscription which helps to know when a new calificacion
    * needs to be loaded
    */
   navigationSubscription;

       /**
    * The other calificaciones shown in the sidebar
    */
   otras_tarjetas: Tarjetas[];


  getTarjetasDetail(): void {
    this.tarjetadecreditoService.getTarjetasDetail(this.tarjeta_id).subscribe(o => {
      this.tarjetadecreditoDetail = o;
    });
  }

     /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
   getOtherTarjetas(): void {
    this.tarjetadecreditoService.getTarjetas()
        .subscribe(cals => {
            this.otras_tarjetas = cals;
            this.otras_tarjetas = this.otras_tarjetas.filter(cals => cals.id !== this.tarjeta_id);
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