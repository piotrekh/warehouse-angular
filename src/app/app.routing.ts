import { Routes } from '@angular/router';
import { WarehousePageComponent } from './warehouse-page/warehouse-page.component';

export const ApplicationRoutes : Routes = [
    {
        path: 'warehouses/:id',
        component: WarehousePageComponent
    }        
]