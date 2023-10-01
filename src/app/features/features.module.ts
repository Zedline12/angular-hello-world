import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelctproductComponent } from './user/components/selctproduct/selctproduct.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { UserModule } from './user/components/user.module';
import { SupplierModule } from './supplier/supplier.module';
import { CategoryService } from '../core/services/category.service';
import { CartModule } from './cart/cart.module';
import { ProductsearchComponent } from './product/productsearch/productsearch.component';
@NgModule({
  declarations: [
   
    
    ProductsearchComponent
  ],
  imports: [
    FeaturesRoutingModule,
    UserModule,
    SupplierModule,
    CartModule
  ],
  providers:[
    CategoryService
  ],
  exports:[
    
    FeaturesRoutingModule
  ],
})
export class FeaturesModule { }
