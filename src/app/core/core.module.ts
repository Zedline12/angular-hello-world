import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProductService } from './services/product.service';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerService } from './components/header/services/customer.service';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { PricePipe } from './pipes/price.pipe';
import { HeroComponent } from './components/hero/hero.component';
import { FetsectionComponent } from './components/fetsection/fetsection.component';
import { PrcardComponent } from './components/prcard/prcard.component';
import { ToysecComponent } from './home/toysec/toysec.component';
import { DoneComponent } from './modals/done/done.component';
import { FeaturesModule } from '../features/features.module';
import { CoreRoutingModule } from './core-routing.module';
import { BoxComponent } from './home/box/box.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    PricePipe,
    HeroComponent,
    FetsectionComponent,
    PrcardComponent,
    ToysecComponent,
    DoneComponent,
    BoxComponent
  ],
  
  providers:[
   ProductService,CustomerService,PricePipe
  ],

  exports:[
   HeaderComponent,
   HomeComponent,
   PricePipe,
   PrcardComponent,
   DoneComponent
  ],
  imports: [
    CommonModule,HttpClientModule,
    NgxStarRatingModule,CoreRoutingModule
  ]
})
export class CoreModule { }
