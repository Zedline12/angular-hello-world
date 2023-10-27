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
  products=new Array()
  numbers!:any
  categories!:any
  constructor(private serv:SupplierService,private catserv:CategoryService){

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
      
    })
   }
  async openmodal(){
    
    return await this.modalComponent.open()
 }
 async openaddmodal(){
 
    return await this.addComponent.open()
  
}
}
