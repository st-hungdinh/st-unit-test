import { Cart, LineItem } from './cart';
import { Product } from './product';

export class CartService {
  private cart: Cart = new Cart();

  constructor() {}

  getCart(): Cart {
    return this.cart;
  }

  calculateTotalPrice(product: Product, quantity: number): number {
    let totalPrice = product.price * quantity;
    switch (quantity) {
      case 1:
        totalPrice = totalPrice - totalPrice * 0.05;
        break;
      case 2:
        totalPrice = totalPrice - totalPrice * 0.1;
      default:
        totalPrice = totalPrice - totalPrice * 0.9;
        break;
    }
    return totalPrice;
  }

  calculateTotalPayment(): number {
    return this.cart.lineItems.reduce((acc, li) => acc + li.totalPrice, 0);
  }

  addToCart(product: Product, quantity: number): boolean {
    // Check if product already exists in cart
    const lineItemExisted = this.cart.lineItems.find((li) => li.product.id === product.id);

    if (lineItemExisted) {
      lineItemExisted.quantity += quantity;
      lineItemExisted.totalPrice = this.calculateTotalPrice(product, lineItemExisted.quantity);
    } else {
      const lineItem: LineItem = {
        product: product,
        quantity: quantity,
        totalPrice: this.calculateTotalPrice(product, quantity)
      };
      this.cart.lineItems.push(lineItem);
    }

    this.cart.totalPayment = this.calculateTotalPayment();

    return true;
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

  clearCart(): boolean {
    this.cart = new Cart();
    return true;
  }
}
