import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { Validators } from '@angular/forms';
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
  supplier!:any
  customers=new Array()
  width!:any
  @ViewChild('email') email!:ElementRef
  @ViewChild('pass') pass!:ElementRef
 
constructor(private serv:AuthService,private fb:FormBuilder,private router:Router,@Inject(DOCUMENT)private document:Document){ 
  this.supplier=fb.group({
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required]]
  })
}
ngOnInit(): void {
  this.serv.loginhelper().subscribe(x=>{
    this.customers=x
  })
}
addcred(cred:any){
  this.supplier.value=cred
 }
 mouseenter(cred:any){
   this.email.nativeElement.value=cred.email
   this.pass.nativeElement.value=cred.pass
 }
 mouseleave(){
   this.email.nativeElement.value=this.supplier.value.email
   this.pass.nativeElement.value=this.supplier.value.pass
 }
submit(email:string,pass:string){
  let stat:number
this.serv.login(email,pass).subscribe(x=>{
  localStorage.removeItem("customerid")
  localStorage.setItem("customerid",x.body)
  this.router.navigate(['/home']).then(() => {
    window.location.reload();
  });
},err=>{
  status=err.status
})
}
}
