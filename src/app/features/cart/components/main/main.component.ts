import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { cart_item } from 'src/app/core/models/cart_item';
import { product } from 'src/app/core/models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cartitems!:[cart_item]
  cartproducts=new Array()
  totalamount:number=0
  constructor(private cartserv:CartService){}
ngOnInit(): void {
 var session=localStorage.getItem("cartsessionid")
 if(session!=null){
  try{
    this.cartserv.getcartitems(Number(session)).subscribe(x=>{
      this.cartitems=x
        for(let i=0;i<=this.cartitems.length-1 ;i++){
          this.cartserv.getproductbyid(this.cartitems[i].product_id).subscribe(x=>{
            this.cartproducts.push(x[0])
            this.totalamount+=this.cartitems.find(item=>item.product_id==x[0].id)!?.quantity*Number(x[0].price)
          })
         
        }
       
     
    })}
    catch(err){

    }finally{
      
    }
 }
}
get cartproductss(){
  return this.cartproducts
}

removecartitem(productid:any){
  this.cartserv.removecartitem(Number(productid)).subscribe(x=>{
    this.cartitems=this.cartitems.filter(item=>!(item.product_id==Number(productid))) as [cart_item]
    this.cartproducts=this.cartproducts.filter(item=>!(item.id==Number(productid))) 
  })
}
}
