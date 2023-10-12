import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { AuthModule } from './auth/auth.module';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierService } from './services/supplier.service';
import { TestComponent } from './auth/test/test.component';
import { ControlComponent } from './components/products/control/control.component';
import { CoreModule } from 'src/app/core/core.module';
import { EditmodalComponent } from './modals/editmodal/editmodal.component';
import { PricePipe } from 'src/app/core/pipes/price.pipe';
import { SmallcardComponent } from './components/smallcard/smallcard.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoremagComponent } from './components/products/control/components/storemag/storemag.component';
import { DashboardComponent } from './components/products/control/components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ControlComponent,
    EditmodalComponent,
    SmallcardComponent,
    StoremagComponent,
    DashboardComponent,
  ],
  providers:[
    SupplierService,PricePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SupplierRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})
export class SupplierModule { }
