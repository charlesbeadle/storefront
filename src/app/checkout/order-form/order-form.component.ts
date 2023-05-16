import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

interface StringKeyObject {
  [key: string]: any;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent {
  constructor(private router: Router, private cartService: CartService) {}

  email = '';
  firstname = '';
  lastname = '';
  address = '';
  address2 = '';
  city = '';
  state = '';
  zip = '';
  phone = '';
  ccNumber = '';
  ccName = '';
  ccExpiration = '';
  ccSecurity = '';

  capitalizeFirstLetter(value: string, field: string) {
    (this as StringKeyObject)[field] =
      value.charAt(0).toUpperCase() + value.slice(1);
  }

  onSubmit() {
    this.clearCart();
    this.router.navigate(['/confirmation']);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
