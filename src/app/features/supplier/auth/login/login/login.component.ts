import { Component, Inject, OnInit ,ElementRef,ViewChild} from '@angular/core';
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
  suppliers=new Array()
  width!:any
  @ViewChild('email') email!:ElementRef
  @ViewChild('pass') pass!:ElementRef
  constructor(private serv:AuthService,private fb:FormBuilder,private router:Router,@Inject(DOCUMENT) private document:Document){
    this.supplier=fb.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]]
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
  ngOnInit(): void {
    this.width=window.innerHeight
  window.addEventListener("resize",()=>{
    this.width=window.innerWidth
  })
    this.serv.adminloginhelper().subscribe(x=>{
      this.suppliers=x
    })
    console.log(Number(localStorage.getItem("supplierid")))
    if(Number(localStorage.getItem("supplierid"))>0){
      this.router.navigate(['/supplierhome'])
    }
  }
  submit2(cred:any){
  this.supplier.value=cred
  this.submit()
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
