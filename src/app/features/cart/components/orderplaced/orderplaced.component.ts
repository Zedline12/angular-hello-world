import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent implements OnInit {
  orders=new Array()
  constructor(private cartserv:CartService){

  }
  ngOnInit(): void {
     this.cartserv.getorders(Number(localStorage.getItem("customerid"))).subscribe(x=>{this.orders=x})
     console.log(this.orders)
  }
}
