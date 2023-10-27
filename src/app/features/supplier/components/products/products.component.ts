import { Conditional } from '@angular/compiler';
import { Component, ViewChild,OnInit ,ElementRef} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/core/services/category.service';
import { SupplierService } from '../../services/supplier.service';
import { DoneComponent } from 'src/app/core/modals/done/done.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   cardproduct={image:"http://192.168.1.8:3000/images/61p79A67kPL._AC_SX679_.jpg",_name:'',price:10}
    loading:boolean=false
  categories!:any
  product!:FormGroup
  producttypes!:[{id:number,producttype:string}]
  avaoptions!:[{brandname:string,opersystem:string,memorystorage:string,color:string}]
  producttype:string="2"
  productf!:any
  imageurl:string="assets/images/phone.png"
  //options
colors:any[]=[]
memorystorages:any[]=[]
screensizes:any[]=[]
opersystem!:string
brandname!:string


//single options
color!:any
memorystorage!:any
screensize!:any
@ViewChild('modal',{ static: false }) private modalComponent!:DoneComponent
@ViewChild('openmodal') private search!: ElementRef;

constructor(private serv:CategoryService,private fb:FormBuilder,private supserv:SupplierService){
  serv.get().subscribe(x=>{
    this.categories=x
  })
  supserv.getproducttypes().subscribe(x=>{this.producttypes=x})
  supserv.getavaoptions().subscribe(x=>this.avaoptions=x)
}

async openmodal(){
  return await this.modalComponent.open()
}
ngOnInit(){
 
  
  if(Number.isNaN(+"wdwd")){
    console.log("Invalid")
  }
  else{
    console.log("Valid")
  }
    this.product=this.fb.group({
      _name:['',Validators.required],
      _desc:['',Validators.required],
      image:[],
      category_id:[],
      producttype:[],
      inventory_id:[],
      price:[,Validators.required],
      discount_id:[],
      quantity:[]
    })
    this.serv.post()
   
}
submit(){
  this.loading=true
 
  this.productf=this.product.value
  this.productf.colors=this.colors
  this.productf.memorystorages=this.memorystorages
  this.productf.screensizes=this.screensizes
  this.productf.brandname=this.brandname
  this.productf.opersystem=this.opersystem
   console.log(this.productf)
// this.supserv.addproduct(this.productf).subscribe(x=>{
 //  this.loading=false
  // this.openmodal()
  // document.getElementById('openmodal')?.click()
  // console.log(x)
 //},err=>{
 //  console.log(err)
 //})
}
pricecheck(){
  let price=this.product.get("price")?.value

  if(!isNaN(+price)&&price.length==4){
    this.product.get("price")?.setValue(price.slice(0,1)+","+price.slice(1))
  }
  else if(!isNaN(+price.slice(0,1)+price.slice(2))&&price.length>4){
     let thoprice=price.slice(0,1)+price.slice(2)
    this.product.get("price")?.setValue(thoprice.slice(0,2)+","+thoprice.slice(2))
  }
  else if(!isNaN(+price.slice(0,2)+price.slice(3))){

  }
  else{
    this.product.get("price")?.setValue("")
  }
}
fileselect(event:any){
  if(event.target.files.length>0){
    const file=event.target.files[0]
    this.product.get("image")?.setValue(file)
    const reader=new FileReader()
    reader.onload=()=>{
      this.imageurl=reader.result as string
      this.cardproduct.image=reader.result as string
    }
    reader.readAsDataURL(file)
    
  }
}
//Select Functions
sel(){
  console.log("selected")
}
seltype(event:any){
this.producttype=this.product.get("producttype")!.value
}
selcolor(value:string){
 this.color=value
}
selbrandname(value:string){
this.brandname=value
}
selopersystem(value:string){
 this.opersystem=value
}
selmemory(value:string){
  this.memorystorage=value
}
selscreensize(value:any){
  this.screensize=value.data
}
//
//push functions
pushcolor(){
  this.colors.push(this.color)
}
pushmemory(){
  this.memorystorages.push(this.memorystorage)
}
pushscreen(){
  this.screensizes.push(this.screensize+" Inches")
}

//
//delete functions
delcolor(value:any){
  const index = this.colors.indexOf(value, 0);
  if (index > -1) {
     this.colors.splice(index, 1);
  }
}
delmemory(value:any){
  const index = this.memorystorages.indexOf(value, 0);
  if (index > -1) {
     this.memorystorages.splice(index, 1);
  }
}

delscreen(value:any){
  const index = this.screensizes.indexOf(value, 0);
  if (index > -1) {
     this.screensizes.splice(index, 1);
  }
console.log(this.colors)
}

get _name(){
  return this.product.get("_name")
}
get _desc(){
  return this.product.get("_desc")
}
get price(){
  return this.product.get("price")
}
}
