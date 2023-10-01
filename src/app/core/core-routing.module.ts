import { NgModule } from "@angular/core";
import { Routes ,RouterModule} from "@angular/router";
import { ProductsearchComponent } from "../features/product/productsearch/productsearch.component";

const routes: Routes = [
    { path: 'productsearch/:search',component:ProductsearchComponent},
  
];
@NgModule({
imports:[
    RouterModule.forRoot(routes)
],exports:[
  RouterModule
]
})
export class CoreRoutingModule{

}