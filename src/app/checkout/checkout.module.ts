import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form/order-form.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { QuantityComponent } from './quantity/quantity.component';

@NgModule({
  declarations: [
    OrderFormComponent,
    CartComponent,
    LayoutComponent,
    QuantityComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [LayoutComponent],
})
export class CheckoutModule {}
