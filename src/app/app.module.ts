import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './api/api.service';

import { AppComponent } from './app.component';
import { WarehousesListComponent } from './warehouses-list/warehouses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehousesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    ApiService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
