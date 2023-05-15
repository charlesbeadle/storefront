import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCount } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<ProductCount[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(product: ProductCount): void {
    const currentItems = this.cartItemsSubject.getValue();
    const item = currentItems.find((item) => {
      return item.id === product.id;
    });
    if (item) {
      item.count += product.count;
    } else {
      currentItems.push({ id: product.id, count: product.count });
    }
    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(product: ProductCount): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((item) => item.id !== product.id);
    this.cartItemsSubject.next(updatedItems);
  }

  changeProductCount(product: ProductCount, newCount: number): number {
    const currentItems = this.cartItemsSubject.getValue();
    const item = currentItems.find((item) => item.id === product.id);
    if (item) {
      item.count = newCount;
    }
    this.cartItemsSubject.next(currentItems);
    return newCount;
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}
