import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { LayoutModule } from './layout/layout.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductModule,
    LayoutModule,
    CheckoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
