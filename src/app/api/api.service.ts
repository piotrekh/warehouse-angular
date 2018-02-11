import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WarehouseInfo } from "./models/warehouse-info";
import { ItemsResult } from "./models/items-result";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { WarehouseStock } from "./models/warehouse-stock";
import { StockEvent } from "./models/stock-event";
import { AddStockEvent } from "./models/add-stock-event";

@Injectable()
export class ApiService {
    constructor(private httpClient: HttpClient) {
    }

    public getAllWarehouses(): Observable<ItemsResult<WarehouseInfo>> {
        const url: string = `${environment.apiUrl}/warehouses`;
        return this.httpClient.get<ItemsResult<WarehouseInfo>>(url);
    }

    public getCurrentWarehouseStock(warehouseId: number): Observable<WarehouseStock> {
        const url: string = `${environment.apiUrl}/warehouses/${warehouseId}`;
        return this.httpClient.get<WarehouseStock>(url);
    }

    public getWarehouseStockEvents(warehouseId: number): Observable<ItemsResult<StockEvent>> {
        const url: string = `${environment.apiUrl}/warehouses/${warehouseId}/stock_events`;
        return this.httpClient.get<ItemsResult<StockEvent>>(url);
    }

    public addStockEvent(warehouseId: number, stockEvent: AddStockEvent): Observable<{}> {
        const url: string = `${environment.apiUrl}/warehouses/${warehouseId}/stock_events`;
        return this.httpClient.post(url, stockEvent);
    }
}