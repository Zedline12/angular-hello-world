import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { customer } from 'src/app/core/models/customer';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  auth!:string;
  status!:number
constructor(private serv:AuthService,private router:Router,@Inject(DOCUMENT)private document:Document){ 
}
ngOnInit(): void {
 
}
submit(customer:customer){
  let stat:number
this.serv.login(customer).subscribe(x=>{
  localStorage.removeItem("customerid")
  localStorage.setItem("customerid",x.body)
  this.router.navigate(['/home'])
},err=>{
  status=err.status
})
}
}
