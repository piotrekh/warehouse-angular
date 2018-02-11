import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseCurrentStockComponent } from './warehouse-current-stock.component';

describe('WarehouseCurrentStockComponent', () => {
  let component: WarehouseCurrentStockComponent;
  let fixture: ComponentFixture<WarehouseCurrentStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseCurrentStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseCurrentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
