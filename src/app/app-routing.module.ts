import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './features/supplier/components/products/products.component';
import { ProductsearchComponent } from './features/product/productsearch/productsearch.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'app',component:AppComponent},
  {path:'',redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
