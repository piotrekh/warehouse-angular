import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { AddStockEvent } from "../api/models/add-stock-event";
import { Observable } from "rxjs/Observable";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs/Subject";

@Injectable()
export class StockService {

    private stockAdded: Subject<AddStockEvent> = new Subject();

    constructor(private apiService: ApiService,
        private toastr: ToastrService) {
    }

    public addStockEvent(warehouseId: number, stockEvent: AddStockEvent) {
        this.apiService.addStockEvent(warehouseId, stockEvent)
            .subscribe(x => {
                this.toastr.success(null, 'Stock event added');
                this.stockAdded.next(stockEvent);
            }, error => {
                this.toastr.error(null, 'An error occurred');
            });
    }

    public onStockAdded(): Observable<AddStockEvent> {
        return this.stockAdded.asObservable();
    }
}