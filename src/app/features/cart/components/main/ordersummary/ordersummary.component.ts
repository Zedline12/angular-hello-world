import { Component, Input ,OnInit,ElementRef} from '@angular/core';

@Component({
  selector: 'ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit{
@Input() totalamount:any=0
constructor(private elementref:ElementRef){

}
 ngOnInit(): void {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "assets/js/main.js";
  this.elementref.nativeElement.appendChild(s);
 }
}
