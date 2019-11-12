import { Component, OnInit, Input } from '@angular/core';
import { ContratistaService } from '../contratista.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ContratistaDetail } from './contratista-detail';

@Component({
  selector: 'app-contratista-detail',
  templateUrl: './contratista-detail.component.html',
  styleUrls: ['./contratista-detail.component.css']
})
export class ContratistaDetailComponent implements OnInit {

  constructor(private contratistaService: ContratistaService,
    private route: ActivatedRoute) { }

    contratistaDetail: ContratistaDetail;
    @Input() con_id: number;

    loader:any;

    getContratistaDetail(): void {
      this.contratistaService.getContratistaDetail(this.con_id)
        .subscribe(contratistaDetail => {
          this.contratistaDetail = contratistaDetail
        });
    }

    onLoad(params) {

      this.con_id = parseInt(params['id']);
      console.log(" en detail " + this.con_id);
      this.contratistaDetail = new ContratistaDetail();
      this.getContratistaDetail();
    }
    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
      
       this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
      
  
    }
    ngOnDestroy() {
      this.loader.unsubscribe();
    }

}
