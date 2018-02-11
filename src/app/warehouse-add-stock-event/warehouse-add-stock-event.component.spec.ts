import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAddStockEventComponent } from './warehouse-add-stock-event.component';

describe('WarehouseAddStockEventComponent', () => {
  let component: WarehouseAddStockEventComponent;
  let fixture: ComponentFixture<WarehouseAddStockEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseAddStockEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseAddStockEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
