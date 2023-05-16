import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { Product, ProductCount } from '../../shared/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productState: ProductCount[] = [];
  toastActive = false;

  initializeProductState(): void {
    this.productState = this.products.map((product) => ({
      id: product.id,
      count: 0,
    }));
  }

  resetProductState(): void {
    this.productState.forEach((product) => (product.count = 0));
  }

  findProductIndex(id: number): number {
    return this.productState.findIndex((product) => product.id === id);
  }

  addItem(id: number): void {
    const productIndex = this.findProductIndex(id);
    this.productState[productIndex].count += 1;
  }

  removeItem(id: number): void {
    const productIndex = this.findProductIndex(id);
    if (this.productState[productIndex].count === 0) {
      return;
    } else {
      this.productState[productIndex].count -= 1;
    }
  }

  addToCart(id: number): void {
    const productIndex = this.findProductIndex(id);
    const product = this.productState[productIndex];
    if (product.count > 0) {
      this.cartService.addToCart(product);
      this.resetProductState();
      this.triggerToast();
    }
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.initializeProductState();
    });
    this.toastService.toastStatus.subscribe((status: boolean) => {
      this.toastActive = status;
    });
  }

  triggerToast() {
    this.toastService.show();
  }
}
