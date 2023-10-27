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
  secondproducts=new Array()
  allproducts=new Array()
  search!:string
constructor(private serv:ProductService,private route:ActivatedRoute){

}
ngOnInit(): void {
  this.search=this.route.snapshot.paramMap.get("search")!
   this.serv.getproducts().subscribe(x=>{
    this.products=x.filter(x=>{
      return x._name.includes(this.search)
    })

    this.secondproducts=x.filter(x=>{
      return (x._name.includes(this.search.substring(0, this.search.indexOf(' '))) && (this.products.every(obj=>{
        return obj.id!=x.id
      })))
    })
    console.log(this.products)
    this.allproducts=x.filter(x=>{
      return (this.products.every(obj=>{
       
       return obj.id!=x.id
      })&&(
        this.secondproducts.every(obj=>{
          
         return obj.id!=x.id
        })
      ))
    })
   })
}

}
