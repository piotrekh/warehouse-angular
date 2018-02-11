import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ToastrModule } from 'ngx-toastr';

import { ApiService } from './api/api.service';
import { StockService } from './shared/stock.service';

import { AppComponent } from './app.component';
import { WarehousesListComponent } from './warehouses-list/warehouses-list.component';
import { WarehousePageComponent } from './warehouse-page/warehouse-page.component';
import { ApplicationRoutes } from './app.routing';
import { WarehouseCurrentStockComponent } from './warehouse-current-stock/warehouse-current-stock.component';
import { WarehouseStockHistoryComponent } from './warehouse-stock-history/warehouse-stock-history.component';
import { WarehouseAddStockEventComponent } from './warehouse-add-stock-event/warehouse-add-stock-event.component';


@NgModule({
  declarations: [
    AppComponent,
    WarehousesListComponent,
    WarehousePageComponent,
    WarehouseCurrentStockComponent,
    WarehouseStockHistoryComponent,
    WarehouseAddStockEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(ApplicationRoutes),
    UiSwitchModule,
    ToastrModule.forRoot({
      newestOnTop: true,
      timeOut: 4000,
      easeTime: 200,
      easing: 'ease-in'      
    }),
  ],
  providers: [
    ApiService,
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
