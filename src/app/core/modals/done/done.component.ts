
import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { SupplierService } from 'src/app/features/supplier/services/supplier.service'
@Component({
  selector: 'done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {
  @ViewChild('modal',{ static: false }) private modalContent!:TemplateRef<DoneComponent>
  private modalRef!: NgbModalRef

  constructor(private modalService: NgbModal,private serv:SupplierService ) { }

  ngOnInit(): void {
   
   
   }
   selectcat(category:string|null){
   
  
   }

  open() {
    this.modalRef = this.modalService.open(this.modalContent)
    this.modalRef.result.then()
  }

  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }
}
