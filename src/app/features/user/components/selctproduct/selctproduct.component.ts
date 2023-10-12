import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/core/models/product';
import { AuthService } from '../services/auth.service';
import { productshirt } from 'src/app/core/models/productshirt';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
@Component({
  selector: 'app-selctproduct',
  templateUrl: './selctproduct.component.html',
  styleUrls: ['./selctproduct.component.css']
})

export class SelctproductComponent implements OnInit {
  pid!:Number
  product!:product
  productf!:FormGroup
  productvariants!:[{value:string,variant:string}]
  productvariantoptions!:[]
  test!:any
  optionlist:productshirt={
    productid:1,
    brandname:'',
    opersystem:'',
    memorystorage:[],
    color:[],
    screensize:[]
  }
    constructor(private route:ActivatedRoute,private router:Router,private serv:AuthService,private cartserv:CartService,private prserv:ProductService,private fb:FormBuilder){
      
    }
    submit(){
      if(Number(localStorage.getItem("customerid"))!=0){

      
      let cartsession={user_id:localStorage.getItem("customerid"),total:this.product.price*this.productf.value.quantity}
      //first step create  (cart session)
      if(localStorage.getItem("cartsessionid")!=null){
        console.log("cart session found")
        let cartitem={session_id:localStorage.getItem("cartsessionid")
          ,product_id:this.product.id,
          quantity:this.productf.value.quantity,
          color:this.productf.value.color,
          memorystorage:this.productf.value.memorystorage,
          screensize:this.productf.value.screensize,
        }
        this.cartserv.createcartitem(cartitem).subscribe(x=>{
          
          if(x.status==200){
           this.router.navigate(['/cart']);
          } 
          })
       
      }
      else{
        this.cartserv.createsession(cartsession).subscribe(x=>{
          //second step  (create cart item)
          localStorage.setItem("cartsessionid",x)
          let cartitem={session_id:x
            ,product_id:this.product.id,
            quantity:this.productf.value.quantity,
            color:this.productf.value.color,
            memorystorage:this.productf.value.memorystorage,
            screensize:this.productf.value.screensize,
          }
         this.cartserv.createcartitem(cartitem).subscribe(x=>{
         
         if(x.status==200){
          
          this.router.navigate(['/cart']);
         } 
         })
  
         //end second step
         },err=>{
          console.log(err)
         })
      }
    }
    else{
      alert("login first")
    }
    }
    settext(id:string,text:string){
     document.getElementById(id)!.innerText=text
    }
    removetext(id:string){
      switch (id){
       case 'color':
        document.getElementById("color")!.innerText=this.productf.value.color
        break;
        case 'memorystorage' :
          document.getElementById("memorystorage")!.innerText=this.productf.value.memorystorage
          break;

      }
    }
    setcolor(color:string){
      this.productf.value.color=color
    }
    mouselev(){
       
    }
    ngOnInit(): void {
      this.pid=Number(this.route.snapshot.paramMap.get("id")!)
      this.prserv.getproductbyid(this.pid).subscribe(x=>{
        this.product=x
      })
      console.log(this.pid)
      this.productf=this.fb.group({
       quantity:[],
       color:'',
       memorystorage:'',
       screensize:''
      })

        this.serv.productvariants(this.product.id).subscribe(x=>{
          this.productvariants=x
          
        })
        this.serv.test(this.product.id).subscribe(x=>{
          const base=x.filter((a:any)=>Object.values(a).every(x=>x!==null))
          const baseone=base[0]
        
          
          const options=x.filter((a:any)=>!(Object.values(a).every(x=>x!==null)))
          let optionsfull=options[0]


          //colors
          for (let i = 0; i < options.length; i++) {
            const obj =Object.fromEntries(Object.entries(options[i]).filter(([key,value])=>key=="color" && value!=null))
            if(obj['color']){
              this.optionlist.color.push(obj['color'] as string)
            }
          }
           
          //memory 
          for (let i = 0; i < options.length; i++) {
            
            const obj=Object.fromEntries(Object.entries(options[i]).filter(([key,value])=>key=="memorystorage" && value!=null));
            if(obj['memorystorage']){
              this.optionlist.memorystorage.push(obj['memorystorage'] as string )
            }
          }
          
          this.productf.value.memorystorage=this.optionlist.memorystorage[0]
          this.productf.value.color=this.optionlist.color[0]
          options.forEach((item:any,index:any)=>{
            const obj=Object.fromEntries(Object.entries(item).filter(([key,value])=>key=="screensize" && value!=null));
            if(obj['screensize']){
              this.optionlist.screensize.push(obj['screensize'] as string )
            }
          })

          
          let optionlistt:any=Object.fromEntries(Object.entries(optionsfull).filter(([key,value])=>key!=="productid" && value!=null))
          
        })

        //
       
    }
}
