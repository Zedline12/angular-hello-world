import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { cart_item } from 'src/app/core/models/cart_item';
import { FormBuilder, Validators } from '@angular/forms';
import {v4 as uuidv4} from 'uuid';
import {formatDate } from '@angular/common';
import { product } from 'src/app/core/models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order!:any
  cartitems!:[cart_item]
  cartproducts=new Array()
  totalamount:number=0
  addressid:number=0
  customerid:number=Number(localStorage.getItem("customerid"))
  constructor(private cartserv:CartService,private fb:FormBuilder,private router:Router){
     this.order=this.fb.group({
     fullname:['',Validators.required],
     phone:[,Validators.required],
     streetname:['',Validators.required],
     buildingname:['',Validators.required],
     city:['',Validators.required],
     district:['',Validators.required],
     governorate:['',Validators.required],
     landmark:['',Validators.required],
     })
  }
  submit(){
    let orderid:number
   if(this.addressid==0){
       this.cartserv.savecustomeraddress(this.order.value).subscribe(x=>{
          console.log(x)
      })
    }
      //save order
      let ordernumber = uuidv4();
      let order={customerid:this.customerid,ordernumber:ordernumber,addressid:2}//this.addressid}
       this.cartserv.saveorder(order).subscribe(x=>{
        orderid=Number(x)
        let orderdetails=new Array()
         //save order detial
        this.cartproducts.forEach(
          product=>{
          let cartitem=this.cartitems.find(item=>item.product_id==product.id)
          let orderdetail={
          orderid:orderid,
          productid:product.id,
          ordernumber:ordernumber,
          price:product.price,
          quantity:cartitem?.quantity,
          discount_id:product.discount_id,
          color:cartitem?.color,
          memorystorage:cartitem?.memorystorage,
          screensize:cartitem?.screensize,
          total:product.price *cartitem!.quantity
          }
          this.cartserv.saveorderdetail(orderdetail).subscribe(x=>{
            console.log(x)
          })
        })
        this.router.navigate(['/orders'])
      })}
     ngOnInit(): void {
      let session=localStorage.getItem("cartsessionid")
      if(session!=null){
        this.cartserv.getcartitems(Number(session)).subscribe(x=>{
          this.cartitems=x
            for(let i=0;i<=this.cartitems.length-1 ;i++){
              this.cartserv.getproductbyid(this.cartitems[i].product_id).subscribe(x=>{
                this.cartproducts.push(x[0])
                this.totalamount+=this.cartitems.find(item=>item.product_id==x[0].id)!?.quantity*Number(x[0].price)
              })
             
            }
       })
      }

      // saved address
      let customerid=localStorage.getItem("customerid")
      if(customerid!=null){
        this.cartserv.getcustomeraddress(Number(customerid)).subscribe(x=>{
         if(x.status==202){
          let address=JSON.parse(x.body)
          this.addressid=address.id
          delete address['id']
          delete address['customerid']
          this.order.setValue(address)
         }
        },err=>{
          console.log(err)
        })
      }
}
}
