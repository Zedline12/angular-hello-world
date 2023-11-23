import { Component,OnInit ,AfterViewInit,ViewEncapsulation} from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../models/product';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { Observable,of,map, flatMap } from 'rxjs';
import { Type } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit{
  products!:product[];
  card!:any
  rating=2
  
  constructor(private productserv:ProductService,private router:Router){

  }
  ngOnInit(): void {
   // assign data to produtcs
    
    this.productserv.getproducts()
     .subscribe((data)=>{
      this.products=data as product[]
    },(err)=>{
   },()=>{
   }
    )
  }
 
   selected(data:any){
    const form:NavigationExtras={
      state:data.product
    }
     this.router.navigate(['/selctproduct'],form)
   }

  
  // <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
      //  <app-prcard class="col" *ngFor="let product of products" [product]="product"></app-prcard>

    //  </div>
 
}
