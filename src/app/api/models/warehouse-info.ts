import { Address } from "./address";

export interface WarehouseInfo {
    id: number;
    name: string;
    size: number;
    hazardousProducts: boolean;
    address: Address;
}