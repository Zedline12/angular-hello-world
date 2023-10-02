import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products=new Array()
  search!:string
constructor(private serv:ProductService,private route:ActivatedRoute){

}
ngOnInit(): void {
  this.search=this.route.snapshot.paramMap.get("search")!
   this.serv.getproducts().subscribe(x=>{
    this.products=x.filter(x=>{
      return x._name.includes(this.search)
    })
    console.log(this.products)
   })
}

}
