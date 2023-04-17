import { CartService } from './cart.service';
import { Product } from './product';

const mockData: {
  [key: string]: Product;
} = {
  apple: {
    id: 1,
    name: 'Product 1',
    price: 100
  },
  orange: {
    id: 2,
    name: 'Product 2',
    price: 200
  }
};

describe('CartService', () => {
  const cartService = new CartService();
  beforeEach(() => {
    cartService.clearCart();
  });

  describe('Test addToCart', () => {
    it('should add product to cart', () => {
      cartService.addToCart(mockData.apple, 1);

      const lineItem = cartService.getCart().lineItems[0];
      expect(lineItem.totalPrice).toBe(95);
      expect(cartService.getCart().lineItems.length).toBe(1);
    });

    it('should add product to cart with quantity', () => {
      cartService.addToCart(mockData.apple, 2);
      cartService.addToCart(mockData.apple, 2);
      expect(cartService.getCart().lineItems[0].quantity).toBe(4);
    });
  });

  describe('Test updateQuantity', () => {
    it('should update quantity of product in cart', () => {
      cartService.addToCart(mockData.apple, 2);
      cartService.addToCart(mockData.apple, 2);
      expect(cartService.getCart().lineItems[0].quantity).toBe(4);
      cartService.updateQuantity(mockData.apple, 3);
      expect(cartService.getCart().lineItems[0].quantity).toBe(3);
    });
  });

  describe('Test removeFromCart', () => {
    it('should remove product from cart', () => {
      cartService.addToCart(mockData.apple, 2);
      cartService.addToCart(mockData.apple, 2);
      expect(cartService.getCart().lineItems.length).toBe(1);
      cartService.removeFromCart(mockData.apple);
      expect(cartService.getCart().lineItems.length).toBe(0);
    });
  });
});
