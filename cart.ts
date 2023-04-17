import { Product } from './product';

export type LineItem = {
  product: Product;
  quantity: number;
  totalPrice: number;
};

export class Cart {
  lineItems: LineItem[];
  totalPayment: number;

  constructor() {
    this.lineItems = [];
    this.totalPayment = 0;
  }
}
