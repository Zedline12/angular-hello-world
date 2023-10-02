import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'supsignup',component:SignupComponent},
  {
    path: 'supplierhome',
    loadChildren: () => import('../supplier.module').then(m => m.SupplierModule)
  },
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
