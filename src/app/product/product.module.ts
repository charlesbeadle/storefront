import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [ProductListComponent, ProductDetailsComponent],
})
export class ProductModule {}
