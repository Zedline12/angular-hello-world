import { Component ,ElementRef,OnInit,TemplateRef,ViewChild} from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { AddprComponent } from 'src/app/features/supplier/modals/addpr/addpr.component';
import { EditmodalComponent } from 'src/app/features/supplier/modals/editmodal/editmodal.component';
import { SupplierService } from 'src/app/features/supplier/services/supplier.service';
@Component({
  selector: 'app-storemag',
  templateUrl: './storemag.component.html',
  styleUrls: ['./storemag.component.css']
})
export class StoremagComponent implements OnInit {
  @ViewChild('modall') private modalComponent!:EditmodalComponent
  @ViewChild('addmodal') private addComponent!:AddprComponent
  show:boolean=false
  showadd:boolean=false

  //search
  products=new Array()
  filterdproducts=new Array()


  numbers!:any
  categories!:any
  selectedcategories=new Array()
  constructor(private serv:SupplierService,private catserv:CategoryService){

  }
  addselcat(selectedcategories:{_name:string,id:number}[]){
    this.selectedcategories=selectedcategories
    if(selectedcategories.some((x)=>x.id===0)){
      this.filterdproducts=this.products
    }
    else{
      this.filterdproducts=this.products.filter(x=>selectedcategories.some((y)=>x.category_id===y.id))
    }
  }
  search(value:string){
   let titlefilter=this.products.filter(x=>x._name.includes(value))
    if(this.selectedcategories.some((x)=>x.id===0)){
      this.filterdproducts=titlefilter
    }
    else{
      this.filterdproducts=titlefilter.filter(x=>this.selectedcategories.some((y)=>x.category_id===y.id))
    }
  }
  delproduct(id:Number){
    this.products=this.products.filter((x:any)=>x.id!=id)
    this.serv.editpnumbers(Number(localStorage.getItem("supplierid")),null).subscribe(x=>{
     this.numbers=x
   })
   }
  ngOnInit(): void {
    this.catserv.get().subscribe(x=>{
      this.categories=x
    })
    this.serv.editpnumbers(Number(localStorage.getItem("supplierid")),null).subscribe(x=>{
      this.numbers=x
    })
    this.serv.editproducts(Number(localStorage.getItem("supplierid")),null).subscribe(x=>{
     
      this.products=x
      console.log(this.products)
      this.filterdproducts=x
    })
    this.selectedcategories.push({_name:"All",id:0})
    //Add Dash
    $(".list-group-item").removeClass("active")
    $("#storemng").addClass("active")
   }
   addcat(category:any){
    let cat=$(`#${category.id}`)
    if(cat.hasClass("active")){
      this.selectedcategories=this.selectedcategories.filter(x=>x.id!=category.id)
    cat.removeClass("active")
    if(this.selectedcategories.length==0){
      $("#0").addClass("active")
      this.selectedcategories.push({_name:"All",id:0})
    }
    }
    else{
      //remove All Selection
      this.selectedcategories=this.selectedcategories.filter(x=>x.id!=0)
      $("#0").removeClass("active")
     //

      this.selectedcategories.push(category)
      cat.addClass("active")
    }
   }
  async openmodal(){
    
    return await this.modalComponent.open()
 }
 async openaddmodal(){
 
    return await this.addComponent.open()
  
}
}
