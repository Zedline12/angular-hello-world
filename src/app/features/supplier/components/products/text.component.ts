import {AfterViewInit,ElementRef,OnInit, Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { DoneComponent} from 'src/app/core/modals/done/done.component';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @ViewChild('modal',{ static: false }) private modalComponent!:DoneComponent

  lastweekorders=new Array()
  suppliername!:string
  lastweekordersprofit:number=0
  selectedvalue:string="Today"
  dashn:any
  async openmodal(){
     return await this.modalComponent.open()
  }
   constructor(private serv:SupplierService,private elementref:ElementRef){
    
   }
   add(){
   
   }
   ngAfterViewInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "assets/js/control.js";
    this.elementref.nativeElement.appendChild(s);
   }
   ngOnInit(): void {
    
    this.serv.suppliername(Number(localStorage.getItem("supplierid"))).subscribe(x=>{
      this.suppliername=x
    })
    this.serv.editpnumbers(Number(localStorage.getItem("supplierid")),null).subscribe(x=>{console.log(x)})

     this.serv.lastweekorders(Number(localStorage.getItem("supplierid")),0).subscribe(x=>{
      this.lastweekorders=x
      this.lastweekorders.forEach(order=>this.lastweekordersprofit+=Number(order.price))
     })

     this.serv.admindash_numbers(Number(localStorage.getItem("supplierid"))).subscribe(x=>{
  
      this.dashn=x
     })
   }

   lasttimeorders(date:number){
    this.serv.lastweekorders(Number(localStorage.getItem("supplierid")),date).subscribe(x=>{
      this.lastweekorders=x
      this.lastweekordersprofit=0
      this.lastweekorders.forEach(order=>this.lastweekordersprofit+=Number(order.price))
     })
   }

   dateselect(date:string){
    switch (date){
      case 'Today':
        this.lasttimeorders(0)
        this.selectedvalue=date
        break;
        case 'LastWeek':
          this.lasttimeorders(7)
          this.selectedvalue=date
          break;
          case 'LastMonth':
            this.lasttimeorders(30)
            this.selectedvalue=date
            break;
    }
   }
}
