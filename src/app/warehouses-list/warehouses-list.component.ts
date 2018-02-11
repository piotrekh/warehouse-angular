import { Component, OnInit } from '@angular/core';
import { WarehouseInfo } from '../api/models/warehouse-info';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.scss']
})
export class WarehousesListComponent implements OnInit {

  public warehouses: WarehouseInfo[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllWarehouses().subscribe(result => this.warehouses = result.items);
  }

}
