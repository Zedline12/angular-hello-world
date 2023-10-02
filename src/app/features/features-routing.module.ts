import { NgModule } from "@angular/core";
import { Routes ,RouterModule} from "@angular/router";
import { SelctproductComponent } from './user/components/selctproduct/selctproduct.component';
const routes: Routes = [
    { path: 'selctproduct/:id',component:SelctproductComponent},
    {
      path: 'cart',
      loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    },
    {
      path: 'supplierauth',
      loadChildren: () => import('./supplier/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: 'auth',
      loadChildren: () => import('./user/components/authentication/authentication.module').then(m => m.AuthenticationModule)
    }
];
@NgModule({
imports:[
    RouterModule.forChild(routes)
],exports:[
  RouterModule
]
})
export class FeaturesRoutingModule{

}