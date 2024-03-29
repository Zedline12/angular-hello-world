import { AfterViewInit, Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import { SupplierService } from 'src/app/features/supplier/services/supplier.service';
import { EditmodalComponent } from 'src/app/features/supplier/modals/editmodal/editmodal.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  lastweekorders=new Array()
  suppliername!:string
  lastweekordersprofit:number=0
  selectedvalue:string="Today"
  @ViewChild('modal') private modalComponent!:EditmodalComponent
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
     $(".list-group-item").removeClass("active")
    $("#dashboard").addClass("active")
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
