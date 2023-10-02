import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { MainComponent } from './components/main/main.component';
import { SqrtPipe } from './pipes/productpipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { PricePipe } from 'src/app/core/pipes/price.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { OrdersummaryComponent } from './components/main/ordersummary/ordersummary.component';
@NgModule({
  declarations: [
    SqrtPipe,
   MainComponent,
   CheckoutComponent,
   OrderplacedComponent,
   OrdersummaryComponent
  ],
  imports: [
    CartRoutingModule,
    ReactiveFormsModule,
    CoreModule,CommonModule
  ]
})
export class CartModule { }
