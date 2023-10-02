import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/app/core/api';
import { supplier } from 'src/app/core/models/supplier';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends api {

  constructor(private http:HttpClient) {super() }
  adminloginhelper():Observable<any>{
   return this.http.get(this.url+"/suppliers")
  }
  login(supplier:supplier):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",supplier.email);
    queryParams = queryParams.append("pass",supplier.pass);
    return this.http.get(this.url+"/suppliers/check",{params:queryParams,observe:'response',responseType:'text'})
  }
}
