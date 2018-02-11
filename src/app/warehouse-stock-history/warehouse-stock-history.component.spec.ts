import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStockHistoryComponent } from './warehouse-stock-history.component';

describe('WarehouseStockHistoryComponent', () => {
  let component: WarehouseStockHistoryComponent;
  let fixture: ComponentFixture<WarehouseStockHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseStockHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseStockHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
