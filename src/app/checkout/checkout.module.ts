import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form/order-form.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderFormComponent, CartComponent, LayoutComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LayoutComponent],
})
export class CheckoutModule {}
