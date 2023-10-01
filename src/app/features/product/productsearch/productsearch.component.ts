import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {
  search!:string
    constructor(private route:ActivatedRoute){
      
    }
    ngOnInit(): void {
      this.search=this.route.snapshot.paramMap.get("search")!
    }
}
