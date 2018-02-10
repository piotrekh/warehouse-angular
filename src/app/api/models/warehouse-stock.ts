import { Stock } from "./stock";

export interface WarehouseStock {
    maxSize: number;
    freeSpace: number;
    currentStock: Stock[];
}