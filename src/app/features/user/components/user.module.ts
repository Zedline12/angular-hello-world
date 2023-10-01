import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelctproductComponent } from './selctproduct/selctproduct.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    
    SelctproductComponent
  ],
  imports: [
    UserRoutingModule,
    AuthenticationModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports:[
    AuthenticationModule
  ]
})
export class UserModule { }
