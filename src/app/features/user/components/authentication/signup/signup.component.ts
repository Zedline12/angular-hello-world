import { Component,ViewChild,ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { customer } from 'src/app/core/models/customer';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  customer:any
  submit:boolean=false
  constructor(private serv:AuthService,private fb:FormBuilder){
    this.customer=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]]
    })
  }
   Submit(){
   this.serv.Signup(this.customer.value).subscribe(x=>{
    console.log(x)
    localStorage.removeItem("customerid")
    localStorage.setItem("customerid",x)
    this.submit=true
   })
   }
   get firstname() {
    return this.customer.get('firstname');
  }
  get lastname(){
    return this.customer.get('lastname')
  }
  get email(){
    return this.customer.get('email')
  }
  get pass(){
    return this.customer.get('pass')
  }
}
