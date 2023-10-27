import { Component,ViewChild,TemplateRef, ElementRef } from '@angular/core';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SupplierService } from '../../services/supplier.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import * as $ from 'jquery';
import { CategoryService } from 'src/app/core/services/category.service';
@Component({
  selector: 'addpr',
  templateUrl: './addpr.component.html',
  styleUrls: ['./addpr.component.css']
})
export class AddprComponent {
  @ViewChild('modal') private modalContent!:TemplateRef<AddprComponent>
  private modalRef!: NgbModalRef
  product!:FormGroup
  categories!:any
  imageurl!:any
  producttype!:any
  producttypes!:any
  brandname!:any
  avaoptions!:any
  opersystem!:any
  constructor(private fb:FormBuilder, private modalService: NgbModal,private serv:CategoryService,private supserv:SupplierService,private elementref:ElementRef ) { }
  
   open() {
    this.modalRef = this.modalService.open(this.modalContent)
    this.modalRef.result.then()
  }
  sel(){
    console.log("selected")
  }
  fileselect(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0]
      this.product.get("image")?.setValue(file)
      const reader=new FileReader()
      reader.onload=()=>{
        this.imageurl=reader.result as string
       
      }
      reader.readAsDataURL(file)
      
    }
  }

  //dynamics
  selbrandname(value:string){
    this.brandname=value
    }
    selmemory(value:any){
      console.log("g")
      console.log(value)
    }
  seltype(){
    this.producttype=this.product.get("producttype")!.value
    }
    selopersystem(value:string){
      this.opersystem=value
     }
    



     //functions
  ngOnInit(): void {
    this.serv.get().subscribe(x=>{
      this.categories=x
    })
    this.supserv.getproducttypes().subscribe(x=>{this.producttypes=x})
    this.supserv.getavaoptions().subscribe(x=>this.avaoptions=x)
    this.product=this.fb.group({
      _name:['',Validators.required],
      _desc:['',Validators.required],
      image:[],
      category_id:[],
      producttype:[],
      inventory_id:[],
      price:[,Validators.required],
      discount_id:[],
      colors:[[]],
      memorystorages:[[]],
      quantity:[]
    })
    
   }
   submit(){
    
    this.product.patchValue({
      memorystorages:this.memories,
      colors:this.colors
    })
    console.log(this.product.value)
   }

  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }


  //gets
  get memories(){
    let raw=$('#memorystor').val() as string
    
    let list = JSON.parse(JSON.stringify(raw));
    let final=list.map((x:string)=>x=x.substring(
      x.indexOf("'")+1,x.lastIndexOf("'")
    ))
    
    return final
   }
   get colors(){
    var raw=JSON.stringify($('#colors').val() as string)
    let list = JSON.parse(raw);
    let final=list.map((x:string)=>x=x.replace(/[^a-z]/gi, ''))
    return final
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

  //
}
