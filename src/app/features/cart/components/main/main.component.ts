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
  products=new Array()
  totalamount:number=0


  constructor(private cartserv:CartService){}
ngOnInit(): void {
  let cartitems=new Array()
  let cartproducts=new Array()
 var session=localStorage.getItem("cartsessionid")
 if(session!=null){
  try{
    this.cartserv.getcartitems(Number(session)).subscribe(x=>{
      cartitems=x
        for(let i=0;i<=cartitems.length-1 ;i++){
          this.cartserv.getproductbyid(cartitems[i].product_id).subscribe(x=>{
            cartproducts[i]=x
            this.products.push({...x,...cartitems[i]})
            this.totalamount+=cartitems.find(item=>item.product_id==x[0].id)!?.quantity*Number(x[0].price)
          })
          
        }
    })}
    catch(err){

    }finally{
   
    }
 }
 else{
  this.cartserv.getcartsession(Number(localStorage.getItem("customerid"))).subscribe(x=>{
    localStorage.setItem("cartsessionid",x)
    window.location.reload();
  })
 }
}


removecartitem(itemid:any){
  this.cartserv.removecartitem(itemid).subscribe(x=>{
    this.products=this.products.filter(item=>item.id!=itemid)
 })
}
}
