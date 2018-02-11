import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api/api.service';
import { WarehouseStock } from '../api/models/warehouse-stock';

@Component({
  selector: 'app-warehouse-current-stock',
  templateUrl: './warehouse-current-stock.component.html',
  styleUrls: ['./warehouse-current-stock.component.scss']
})
export class WarehouseCurrentStockComponent implements OnInit {

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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  private loadStock() {
    this.apiService.getCurrentWarehouseStock(this.warehouseId).subscribe(result => {
      this.stock = result;
      this.occupiedSpacePercentage = Math.round(100 * (this.stock.maxSize - this.stock.freeSpace) / this.stock.maxSize);
    });
  }
}
