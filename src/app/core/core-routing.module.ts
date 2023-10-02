import { NgModule } from "@angular/core";
import { Routes ,RouterModule} from "@angular/router";
import { ProductsearchComponent } from "../features/product/productsearch/productsearch.component";
import { MainComponent } from "../features/product/main/main.component";

const routes: Routes = [
    { path: 'productsearch/:search',component:MainComponent},
  
];
@NgModule({
imports:[
    RouterModule.forChild(routes)
],exports:[
  RouterModule
]
})
export class CoreRoutingModule{

}