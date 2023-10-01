import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { UserModule } from './features/user/components/user.module';
import { SupplierModule } from './features/supplier/supplier.module';
import { FooterComponent } from './core/components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
  ],
  exports:[AppRoutingModule,RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
