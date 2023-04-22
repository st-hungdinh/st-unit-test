import { Cart, LineItem } from './cart';
import { Product } from './product';

export class CartService {
  cart: Cart;

  constructor() {
    this.cart = new Cart();
  }

  getCart(): Cart {
    return this.cart;
  }

  calculateTotalPrice(product: Product, quantity: number): number {
    let discount = 0;

    product.discounts.forEach((dct) => {
      if (quantity >= dct.quantity) {
        discount = dct.discount;
      }
    });
    return product.price * quantity - product.price * quantity * discount;
  }

  addToCart(product: Product, quantity: number): LineItem {
    let item = this.cart?.lineItems.find((li) => li.product.id === product.id);
    if (item) {
      item.quantity += quantity;
      item.totalPrice = this.calculateTotalPrice(product, item.quantity);
    } else {
      item = {
        id: this.cart.lineItems.length + 1,
        product: product,
        quantity: quantity,
        totalPrice: this.calculateTotalPrice(product, quantity)
      } as LineItem;
      this.cart.lineItems.push(item);
    }
    this.cart.totalPayment = this.calculateTotalPayment();
    return item;
  }

  updateQuantity(product: Product, quantity: number): boolean {
    const lineItemExisted = this.cart.lineItems.find((li) => li.product.id === product.id);
    if (lineItemExisted) {
      lineItemExisted.quantity = quantity;
      lineItemExisted.totalPrice = this.calculateTotalPrice(product, lineItemExisted.quantity);
      this.cart.totalPayment = this.calculateTotalPayment();
      return true;
    }
    return false;
  }

  removeFromCart(product: Product): boolean {
    const lineItemExisted = this.cart.lineItems.find((li) => li.product.id === product.id);
    if (lineItemExisted) {
      this.cart.lineItems = this.cart.lineItems.filter((li) => li.product.id !== product.id);
      this.cart.totalPayment = this.calculateTotalPayment();
      return true;
    }
    return false;
  }

  calculateTotalPayment(): number {
    return this.cart.lineItems.reduce((acc, li) => acc + li.totalPrice, 0);
  }

  clearCart(): boolean {
    this.cart = new Cart();
    return true;
  }
}
