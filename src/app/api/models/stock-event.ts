import { Product } from "./product";

export interface StockEvent {
    eventType: string;
    eventDate: string;
    productAmount: number;
    product: Product;
}