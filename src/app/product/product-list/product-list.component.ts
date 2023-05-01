import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Product } from '../../types/product';

interface ProductQuantity {
  [id: number]: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productQuantity: ProductQuantity = {};
  @Output() addProductsToCart = new EventEmitter<any>();
  @Output() removeProductFromCart = new EventEmitter<any>();

  addProduct(id: number): void {
    this.productQuantity[id] += 1;
  }

  removeProduct(id: number): void {
    if (this.productQuantity[id] === 0) {
      this.productQuantity[id] = 0;
    } else {
      this.productQuantity[id] -= 1;
    }
  }

  addToCart(): void {
    this.addProductsToCart.emit(this.productQuantity);
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.products.forEach((product) => {
        this.productQuantity[product.id] = 0;
      });
    });
  }
}
