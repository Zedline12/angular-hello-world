import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'orders',component:OrderplacedComponent},
  {path:'',redirectTo:'main',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
