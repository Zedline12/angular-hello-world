import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent {
  search!:string
  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.search=this.route.snapshot.paramMap.get("search")!
  }
}
