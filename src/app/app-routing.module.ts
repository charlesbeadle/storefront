import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { ProductsComponent } from './modules/product/products/products.component'

const routes: Routes = [
  {'path': ' ', 'component': AppComponent},
  {'path': 'products', 'component': ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
