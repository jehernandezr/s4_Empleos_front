import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
  })
  export class HomeComponent implements OnInit {
  
    constructor(private router: Router, private route: ActivatedRoute) { }

    buscar():void{
      var nombre = (<HTMLInputElement> document.getElementById("search")).value;
      
      this.router.navigate(['/ofertas/'], {queryParams: {a: nombre},relativeTo : this.route});
 
    }

  
    ngOnInit() {
    }
  
  }