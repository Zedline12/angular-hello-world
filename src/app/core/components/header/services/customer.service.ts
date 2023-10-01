import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/app/core/api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService extends api{
    
  constructor(private http:HttpClient) {super() }

  get_customer(id:number):Observable<any>{
    return this.http.get(this.url+"/customers/homepage/"+id)
  }
  customer_valid(id:number):Observable<any>{
    return this.http.get(this.url+"/customers/isvalid/"+id)
  }
}
