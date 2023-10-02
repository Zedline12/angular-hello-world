import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';
import { api } from '../api';
import * as moment from 'moment'
@Injectable({
  providedIn: 'root'
})
export class ProductService extends api {

  constructor(private http:HttpClient) {
super()
   }
   getproducts():Observable<product[]>{
    return this.http.get(this.url+"/products") as Observable<product[]>
   }
   getproductbyid(id:Number):Observable<product>{
    return this.http.get(this.url+"/products/"+id) as Observable<product>
   }
   insertproducts(data:any):void{
    const date=moment().format('YYYY-MM-DD')
    const headers={'Content-Type':'application/json'}
    const body={_name:data.title,_desc:data.description,image:data.image,price:data.price,created_at:date,modified_at:date,deleted_at:date}
    this.http.post(this.url+"/products",body,{headers,responseType:'text'}).subscribe(data=>{console.log(data)})
   }
  
}
