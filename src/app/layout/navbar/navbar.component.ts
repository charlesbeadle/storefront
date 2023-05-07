import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductCount } from '../../shared/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  totalItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems: ProductCount[]) => {
      this.totalItemCount = cartItems.reduce(
        (total, item) => total + item.count,
        0
      );
    });
  }
}
