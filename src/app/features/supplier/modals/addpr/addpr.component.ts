import { Component,ViewChild,TemplateRef, ElementRef } from '@angular/core';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SupplierService } from '../../services/supplier.service';
import { FormBuilder, FormGroup,FormGroupDirective,Validators } from '@angular/forms';
import * as $ from 'jquery';
import { CategoryService } from 'src/app/core/services/category.service';
import { NgForm } from '@angular/forms';
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
   isSubmited:boolean=false
   @ViewChild('formDirective') private formDirective!: NgForm;
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
      _desc:['Images simulated for illustrative purposes. Actual UI/UX may be different.**Measured diagonally, the screen size is 6.6" in the full rectangle and 6.4" accounting for the rounded corners. Actual viewable area is less due to the rounded corners and the camera cutout.',Validators.required],
      image:[,Validators.required],
      category_id:[,Validators.required],
      producttype:[2],
      inventory_id:[],
      price:[,Validators.required],
      discount_id:[],
      colors:[[]],
      memorystorages:[[]],
      quantity:[],
      screensize:[],
      brandname:[],
      opersystem:['Android 10']
    })
    
   }
   submit(){
    this.isSubmited=true
    if(this.product.valid){
      this.product.patchValue({
        memorystorages:this.memories,
        colors:this.colors
      })
      this.supserv.addproduct(this.product.value).subscribe(x=>{
     $("#donesvg").removeClass("d-none")
      },err=>{
        console.log(err)
      })
    }
   }
   resetform(){
    this.isSubmited=false
    $("#formFileLg").val('')
   this.formDirective.resetForm()
   this.AddDefaultForm()
    $("#donesvg").addClass("d-none")
   }
   AddDefaultForm(){
    this.product.get("_desc")?.setValue('Images simulated for illustrative purposes. Actual UI/UX may be different.**Measured diagonally, the screen size is 6.6" in the full rectangle and 6.4" accounting for the rounded corners. Actual viewable area is less due to the rounded corners and the camera cutout.')
    this.product.get("opersystem")?.setValue("Android 10")
    this.product.get("producttype")?.setValue(2)
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
    
    return raw
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
  get image(){
    return this.product.get("image")
  }

  //
}
