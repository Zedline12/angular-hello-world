
import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { SupplierService } from '../../services/supplier.service'
@Component({
  selector: 'editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css']
})
@Injectable()
export class EditmodalComponent {
  @ViewChild('modal') private modalContent!:TemplateRef<EditmodalComponent>
  private modalRef!: NgbModalRef
  numbers!:any
  products!:any
  category:string="All Categories"
  constructor(private modalService: NgbModal,private serv:SupplierService ) { }
  delproduct(id:Number){
   this.products=this.products.filter((x:any)=>x.id!=id)
   this.serv.editpnumbers(Number(localStorage.getItem("supplierid")),null).subscribe(x=>{
    this.numbers=x
  })
  }
   open() {
    this.modalRef = this.modalService.open(this.modalContent)
    this.modalRef.result.then()
  }
  ngOnInit(): void {
    this.serv.editpnumbers(Number(localStorage.getItem("supplierid")),null).subscribe(x=>{
      this.numbers=x
    })
    this.serv.editproducts(Number(localStorage.getItem("supplierid")),null).subscribe(x=>{
     
      this.products=x
      
    })
   }
   selectcat(category:string|null){
    this.serv.editpnumbers(Number(localStorage.getItem("supplierid")),category=='All Categories'?null:category).subscribe(x=>{
      this.numbers=x
    })
    this.serv.editproducts(Number(localStorage.getItem("supplierid")),category=='All Categories'?null:category).subscribe(x=>{
      this.products=x
      
    })
    this.category=category!
   }


  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }
}
