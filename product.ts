export type ProductDiscount = {
  quantity: number;
  discount: number;
};

export class Product {
  id: number;
  name: string;
  price: number;
  discounts: ProductDiscount[];

  constructor(id: number, name: string, price: number, discounts: ProductDiscount[]) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discounts = discounts;
  }
}
