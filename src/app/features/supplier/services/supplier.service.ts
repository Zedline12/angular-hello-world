import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { api } from 'src/app/core/api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierService extends api {

  constructor(private http:HttpClient) {super() }
   deleteroduct(id:number):Observable<any>{
    return this.http.delete(this.url+"/products/"+id,{observe:'response',responseType:'text'})
   }
   addproduct(product:any){
    let data=new FormData()
    data.append("_name",product._name)
    data.append("_desc",product._desc)
    data.append("image",product.image)
    data.append("price",product.price)
    data.append("category_id",product.category_id)
    data.append("supplierid",localStorage.getItem("supplierid")!)
    data.append("colors",JSON.stringify(product.colors)) // the only way to pass array to formdata
    data.append("screensizes",JSON.stringify(product.screensizes))
    data.append("memorystorages",JSON.stringify(product.memorystorages))
    data.append("brandname",product.brandname)
    data.append("operystem",product.opersystem)
    data.append("producttype",product.producttype)
    data.append("quantity",product.quantity)
    const headers= new HttpHeaders()
  .set('content-type', 'multipart/form-data')
   return this.http.post(this.url+"/products/",data,{responseType:'text',observe:'response'})
   }
   getproducttypes():Observable<any>{
     return this.http.get(this.url+"/products/types")
   }
   getavaoptions():Observable<any>{
    return this.http.get(this.url+"/products/avaoptions")
   }


   //admin dash
  lastweekorders(supplierid:number,date:number):Observable<any>{
    return this.http.get(this.url+"/orders/lasttime/"+supplierid+"/"+date)
  }

  admindash_numbers(supplierid:number):Observable<any>{
    return this.http.get(this.url+"/suppliers/admindash_numbers/"+supplierid)
  }
  editpnumbers(supplierid:number,category:string |null):Observable<any>{
    return this.http.get(this.url+"/suppliers/editpnumbers/"+supplierid+"/"+category)
   }
   editproducts(supplierid:number,category:string |null):Observable<any>{
    return this.http.get(this.url+"/suppliers/editproducts/"+supplierid+"/"+category)
   }
   suppliername(supplierid:number):Observable<any>{
    return this.http.get(this.url+"/suppliers/name/"+supplierid,{responseType:'text'})
   }
}
