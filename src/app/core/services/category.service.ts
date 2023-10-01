import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends api {

  constructor(private http:HttpClient) {super() }
  get():Observable<any>{
    
   return this.http.get(this.url+"/categories")
  }
  post(){
    let data=new FormData()
    data.append("name","bedo")
    data.append("password","bedo307")
    this.http.post(this.url+"/products",data)
  }
}
