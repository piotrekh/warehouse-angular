import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warehouse-page',
  templateUrl: './warehouse-page.component.html',
  styleUrls: ['./warehouse-page.component.scss']
})
export class WarehousePageComponent implements OnInit {

  public warehouseId: number;

  constructor(private route: ActivatedRoute) { 
      this.route.params.subscribe(result => {
        this.warehouseId = result['id'];        
      });
    }

  ngOnInit() {
  }

}
