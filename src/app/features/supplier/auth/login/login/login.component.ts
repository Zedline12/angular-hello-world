import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  supplier!:any
  constructor(private serv:AuthService,private fb:FormBuilder,private router:Router,@Inject(DOCUMENT) private document:Document){
    this.supplier=fb.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    console.log(Number(localStorage.getItem("supplierid")))
    if(Number(localStorage.getItem("supplierid"))>0){
      this.router.navigate(['/supplierhome'])
    }
  }
   submit(){
    this.serv.login(this.supplier.value).subscribe(x=>{
      localStorage.setItem("supplierid",x.body)
     
       this.document.location.reload()
    },err=>{
      switch(err.status){
        case 202:
          this.router.navigate(["/supplierhome"])
          break;
          case 401:
            console.log(err.status)
            break;
      }
    }
      
      )
   }
}
