import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../api/api.service';
import { StockEvent } from '../api/models/stock-event';
import { StockService } from '../shared/stock.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-warehouse-stock-history',
  templateUrl: './warehouse-stock-history.component.html',
  styleUrls: ['./warehouse-stock-history.component.scss']
})
export class WarehouseStockHistoryComponent implements OnInit, OnDestroy {

  private stockAddedSubscription: Subscription;

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

  constructor(private apiService: ApiService,
    private stockService: StockService) {
    this.stockAddedSubscription = this.stockService.onStockAdded().subscribe(x => this.loadStockEvents());
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.stockAddedSubscription.unsubscribe();
  }

  private loadStockEvents() {
    this.apiService.getWarehouseStockEvents(this.warehouseId).subscribe(result => this.stockEvents = result.items);
  }
}
