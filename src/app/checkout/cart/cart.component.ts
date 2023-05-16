import { Component } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { ProductCount, Product } from '../../shared/types/';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];
  products: Product[] = [];
  displayedCartItems: any[] = [];
  toastActive = false;

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.updateDisplayedCartItems();
    });
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.updateDisplayedCartItems();
    });
    this.toastService.toastStatus.subscribe((status: boolean) => {
      this.toastActive = status;
    });
  }

  updateDisplayedCartItems(): void {
    this.displayedCartItems = this.cartItems.map((item) => {
      const product = this.products.find((product) => product.id === item.id);
      return product ? { ...item, ...product } : item;
    });
  }

  getTotal(): number {
    return this.displayedCartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }

  removeProduct(product: ProductCount): void {
    this.cartService.removeFromCart(product);
    this.triggerToast();
  }

  onCountChange(item: ProductCount, newCount: number) {
    const updatedCount = this.cartService.changeProductCount(item, newCount);

    const displayedItem = this.displayedCartItems.find(
      (displayedItem) => displayedItem.id === item.id
    );
    if (displayedItem) {
      displayedItem.count = updatedCount;
      const cartItem = this.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (cartItem) {
        cartItem.count = updatedCount;
      }
    }
  }

  triggerToast() {
    this.toastService.show();
  }
}
