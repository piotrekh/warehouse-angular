import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../api/models/product';
import { ApiService } from '../api/api.service';
import { AddStockEvent } from '../api/models/add-stock-event';
import { eventTypes } from '../api/constants';
import * as moment from 'moment';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { StockService } from '../shared/stock.service';

@Component({
  selector: 'app-warehouse-add-stock-event',
  templateUrl: './warehouse-add-stock-event.component.html',
  styleUrls: ['./warehouse-add-stock-event.component.scss']
})
export class WarehouseAddStockEventComponent implements OnInit {

  private _warehouseId: number;

  public get warehouseId() {
    return this._warehouseId
  }

  @Input()
  public set warehouseId(value: number) {
    const now = moment();
    now.second(0);

    this._warehouseId = value;    
    this.stockEvent = {
      eventDate: now.format("YYYY-MM-DDTHH:mm:ss"),
      eventType: eventTypes.import,
      productAmount: 1,
      productId: null
    };
    this._eventDate = {
      year: now.year(),
      month: now.month() + 1,
      day: now.date()
    };
    this._eventTime ={
      hour: now.hour(),
      minute: now.minute(),
      second: now.second()
    };
  }

  private _eventDate: NgbDateStruct = null;

  public get eventDate(): NgbDateStruct {
    return this._eventDate;
  }

  public set eventDate(value: NgbDateStruct) {    
    this._eventDate = value;

    var date = moment(this.stockEvent.eventDate);
    date.year(value.year);
    date.month(value.month - 1);
    date.date(value.day);
    this.stockEvent.eventDate = date.format("YYYY-MM-DDTHH:mm:ss");
  }

  private _eventTime: NgbTimeStruct = null;

  public get eventTime(): NgbTimeStruct {
    return this._eventTime;
  }

  public set eventTime(value: NgbTimeStruct) {    
    this._eventTime = value;

    var date = moment(this.stockEvent.eventDate);
    date.hour(value.hour);
    date.minute(value.minute);
    this.stockEvent.eventDate = date.format("YYYY-MM-DDTHH:mm:ss");
  }

  public eventTypes: string[] = [eventTypes.import, eventTypes.export];

  public products: Product[] = [];

  public stockEvent: AddStockEvent;

  constructor(private apiService: ApiService,
  private stockService: StockService) { }

  ngOnInit() {
    this.loadProducts();
  }

  public addEvent() {
    console.log(this.stockEvent);
    this.stockService.addStockEvent(this.warehouseId, this.stockEvent);
  }

  private loadProducts() {
    this.apiService.getAllProducts().subscribe(result => this.products = result.items);
  }
}
