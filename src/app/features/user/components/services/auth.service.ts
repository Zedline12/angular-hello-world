import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpParams, HttpResponse } from '@angular/common/http';
import { customer } from 'src/app/core/models/customer';
import { api } from 'src/app/core/api';
import { Observable, catchError ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends api{
status!:any
  constructor(private http:HttpClient) {super() }
   login(customer:customer):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",customer.email);
    queryParams = queryParams.append("pass",customer.pass);
     return this.http.get(this.url+"/customers/check",{params:queryParams,observe: 'response'})
  }

   Signup(customer:customer):Observable<any>{
   return this.http.post(this.url+"/customers",customer,{responseType:'text'})
   }
   productvariants(id:number):Observable<any>{
   return this.http.get(this.url+"/products/variants/"+id.toString())
   
   }
   test(id:number):Observable<any>{
    return this.http.get(this.url+"/products/test/"+id.toString())
   }
}
