import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/core/api';

@Injectable({
  providedIn: 'root'
})
export class CartService extends api {

  constructor(private http:HttpClient) {super() }

  createsession(product:any):Observable<any>{
   return this.http.post(this.url+"/cart/create_session",product)
  }
  createcartitem(cart_item:any):Observable<any>{
    return this.http.post(this.url+"/cart/create_cart_item",cart_item,{responseType: 'text',observe:'response'})
  }
}
