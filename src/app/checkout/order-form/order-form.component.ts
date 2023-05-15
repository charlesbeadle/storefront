import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent {
  constructor(private router: Router, private cartService: CartService) {}
  orderForm = new FormGroup({
    email: new FormControl('', [Validators['required'], Validators['email']]),
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    address: new FormControl('', Validators.required),
    address2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{5}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/),
    ]),
    ccNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4} ?\d{4} ?\d{4} ?\d{4}$/),
    ]),
    ccName: new FormControl('', Validators.required),
    ccExpiration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    ccSecurity: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{3}$/),
    ]),
  });

  onSubmit() {
    if (this.orderForm.valid) {
      // simulated 200 response
      this.router.navigate(['/confirmation']);
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
