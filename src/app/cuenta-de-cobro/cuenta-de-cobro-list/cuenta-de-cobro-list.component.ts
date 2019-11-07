import { Component, OnInit } from '@angular/core';
import{CuentaDeCobro} from '../cuenta-de-cobro';
@Component({
  selector: 'app-cuenta-de-cobro-list',
  templateUrl: './cuenta-de-cobro-list.component.html',
  styleUrls: ['./cuenta-de-cobro-list.component.css']
})
export class CuentaDeCobroListComponent implements OnInit {
/**
* The list of editorials which belong to the BookStore
 */ cuentas: CuentaDeCobro[] =[];;

  constructor() { }

  ngOnInit() {
  }

}