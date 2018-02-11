import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../api/api.service';
import { WarehouseStock } from '../api/models/warehouse-stock';
import { Subscription } from 'rxjs/Subscription';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-warehouse-current-stock',
  templateUrl: './warehouse-current-stock.component.html',
  styleUrls: ['./warehouse-current-stock.component.scss']
})
export class WarehouseCurrentStockComponent implements OnInit, OnDestroy {

  private stockAddedSubscription: Subscription;

  private _warehouseId: number;

  public get warehouseId() {
    return this._warehouseId
  }

  @Input()
  public set warehouseId(value: number) {
    this._warehouseId = value;
    this.loadStock();
  }

  public stock: WarehouseStock = null;
  public occupiedSpacePercentage: number = 0;

  public get occupiedSpaceIndicatorType(): string {
    if (this.occupiedSpacePercentage < 65)
      return "success";
    else if (this.occupiedSpacePercentage < 90)
      return "warning";
    else
      return "danger";
  }

  constructor(private apiService: ApiService,
    private stockService: StockService) {
    this.stockAddedSubscription = this.stockService.onStockAdded().subscribe(x => this.loadStock());
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.stockAddedSubscription.unsubscribe();
  }

  private loadStock() {
    this.apiService.getCurrentWarehouseStock(this.warehouseId).subscribe(result => {
      this.stock = result;
      this.occupiedSpacePercentage = Math.round(100 * (this.stock.maxSize - this.stock.freeSpace) / this.stock.maxSize);
    });
  }
}
