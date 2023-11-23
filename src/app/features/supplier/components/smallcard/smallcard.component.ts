import { Component, Input,OnInit ,ViewChild,ElementRef,Output,EventEmitter} from '@angular/core';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.css']
})
export class SmallcardComponent implements OnInit {
@Input() product!:any
@Output() delproduct = new EventEmitter<Number>();
deleted:boolean=false
@ViewChild('card') delbut!:ElementRef
constructor(private supserv:SupplierService){}
ngOnInit(): void {
 if(this.product.stock <(this.product.quantity/2)){
  $(`#${this.product.id}-stock`).addClass("red")
 }

}
deletepr(id:number){
  this.supserv.deleteroduct(id).subscribe(x=>{
    if(x.status==200){
      this.delbut.nativeElement.classList.add('remove')
    }
    else{
      alert("there is something wrong")
    }
  },ee=>{
    console.log(ee)
  })
}
tranend(id:number){
 this.delproduct.emit(id)
}
}
