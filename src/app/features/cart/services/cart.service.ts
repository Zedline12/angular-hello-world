import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/core/api';
import { cart_item } from 'src/app/core/models/cart_item';

@Injectable({
  providedIn: 'root'
})
export class CartService extends api {

  constructor(private http:HttpClient) {super() }
  //cart 
  getcartitems(sessionid:number):Observable<any>{
   return this.http.get(this.url+"/cart/cart_items/"+sessionid)
  }
  removecartitem(productid:number):Observable<any>{
    return this.http.get(this.url+"/cart/removecartitem/"+productid,{responseType: 'text'})
  }
  getproductbyid(id:number):Observable<any>{
    return this.http.get(this.url+"/products/"+id)
  }

  //checkout
  getcustomeraddress(customerid:number):Observable<any>{
    return this.http.get(this.url+"/customers/address/"+customerid,{responseType: 'text',observe:'response'})
  }
  savecustomeraddress(address:any):Observable<any>{
    return this.http.post(this.url+"/customers/saveaddress",address)
  }


  //orders
  saveorder(order:any):Observable<any>{
    return this.http.post(this.url+"/orders/saveorder",order)
  }
  saveorderdetail(orderdetail:any):Observable<any>{
    return this.http.post(this.url+"/orders/saveorderdetails",orderdetail,{responseType: 'text'})
  }
  getorders(customerid:number):Observable<any>{
    return this.http.get(this.url+"/orders/"+customerid)
  }
}
