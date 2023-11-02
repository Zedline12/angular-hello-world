import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  categories!:any
  selectedcategories=new Array({_name:"All",id:0})
  constructor(private catserv:CategoryService){

  }
  addcat(category:any){
    let cat=$(`#${category.id}`)
    if(cat.hasClass("active")){
      this.selectedcategories=this.selectedcategories.filter(x=>x.id!=category.id)
    cat.removeClass("active")
    if(this.selectedcategories.length==0){
      $("#0").addClass("active")
      this.selectedcategories.push({_name:"All",id:0})
    }
    }
    else{
      //remove All Selection
      this.selectedcategories=this.selectedcategories.filter(x=>x.id!=0)
      $("#0").removeClass("active")
     //

      this.selectedcategories.push(category)
      cat.addClass("active")
    }
   }
  ngOnInit(): void {
    this.catserv.get().subscribe(x=>{
      this.categories=x
    })
  }
}
