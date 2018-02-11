import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api/api.service';
import { StockEvent } from '../api/models/stock-event';

@Component({
  selector: 'app-warehouse-stock-history',
  templateUrl: './warehouse-stock-history.component.html',
  styleUrls: ['./warehouse-stock-history.component.scss']
})
export class WarehouseStockHistoryComponent implements OnInit {

  private _warehouseId: number;

  public get warehouseId() {
    return this._warehouseId
  }

  @Input()
  public set warehouseId(value: number) {
    this._warehouseId = value;
    this.loadStockEvents();
  }

  public stockEvents: StockEvent[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  private loadStockEvents() {
    this.apiService.getWarehouseStockEvents(this.warehouseId).subscribe(result => this.stockEvents = result.items);
  }
}
