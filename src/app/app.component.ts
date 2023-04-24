import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './types/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Storefront';
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
