import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [ProductListComponent],
})
export class ProductModule {}
