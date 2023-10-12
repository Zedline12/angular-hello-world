import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './components/products/products.component';
import { ControlComponent } from './components/products/control/control.component';
import { StoremagComponent } from './components/products/control/components/storemag/storemag.component';
import { DashboardComponent } from './components/products/control/components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'home',component:ControlComponent,children:[
    {path:'storemag',component:StoremagComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'dashboard',pathMatch:'full'}
  ]},
  {path:'storemag',component:StoremagComponent},
  {path:'products',component:ProductsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
