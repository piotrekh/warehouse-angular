import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './api/api.service';

import { AppComponent } from './app.component';
import { WarehousesListComponent } from './warehouses-list/warehouses-list.component';
import { WarehousePageComponent } from './warehouse-page/warehouse-page.component';
import { ApplicationRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    WarehousesListComponent,
    WarehousePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(ApplicationRoutes)
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
