import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ProductListComponent],
})
export class ProductModule {}
