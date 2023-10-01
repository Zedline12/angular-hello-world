import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products=new Array()
  filterp!:any
  search!:string
  hover:boolean=false
  customerid!:number
  valid:boolean=false
  customer!:{name:string,cartcount:number}
   constructor(private serv:CustomerService,private productserv:ProductService,private router:Router){

   }
   mosenter(){
   this.hover=true
   }
   moslev(){
    this.hover=true
   }
   nav(search:string){
    this.router.navigate(["/productsearch",search])
    
    this.focusout()
   }
   clear(){
    localStorage.clear()
   }
   focus(){
    document.getElementById('tint')?.classList.add("active")
   }
   keydown(event:any){
    let input=event.target.value
    document.getElementById('search_in')?.classList.add("active")
    this.filterp=this.products.filter(x=>String(x._name).toLowerCase().startsWith(input.toLowerCase()))
    console.log(this.filterp)
   }
   focusout(){
   
    document.getElementById('tint')?.classList.remove("active")
    document.getElementById('search_in')?.classList.remove("active")
   }
   ngOnInit(){
    this.productserv.getproducts()
    .subscribe(x=>{
     this.products=x
     console.log(this.products)
   }
    )
  
    this.customer={name:"",cartcount:0}
    console.log(localStorage.getItem("customerid"))
    this.customerid=Number(localStorage.getItem("customerid"))
    if(this.customerid!=0 ||!null){
      this.serv.customer_valid(this.customerid).subscribe(x=>{
        console.log(x)
        if(x==1){
          this.valid=true
          this.serv.get_customer(this.customerid).subscribe(x=>{
            this.customer=x
          })
        }
      })
    }
   }
}
//<div class="input-group">
//<input type="search" placeholder="Search your product" class="form-control" />
//<button class="btn bg-white" type="submit">
 //   <i class="fa fa-search"></i>
//</button>
//</div>
