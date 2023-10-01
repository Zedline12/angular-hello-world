import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ControlComponent } from './components/products/control/control.component';

const routes: Routes = [
  {path:'home',component:ControlComponent},
  {path:'products',component:ProductsComponent},
  {path:'control',component:ControlComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
