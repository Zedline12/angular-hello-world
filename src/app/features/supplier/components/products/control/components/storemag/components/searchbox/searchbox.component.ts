import { Component, OnInit,Output,EventEmitter,ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { AddprComponent } from 'src/app/features/supplier/modals/addpr/addpr.component';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  categories=new Array()
  all_count:number=0
  selectedcategories=new Array({_name:"All",id:0})
  @Output() searchvalue=new EventEmitter<string>();
  @Output() selectedcategoriesout = new EventEmitter<{_name:string,id:number}[]>();
  @ViewChild('addmodal') private addComponent!:AddprComponent
  constructor(private catserv:CategoryService){

  }
  search(event:Event){
    this.searchvalue.emit((event.target as HTMLInputElement).value)
  }
  addcat(category:any){
    
    let cat=$(`#${category.id}`)
    if(cat.hasClass("active")){
      this.selectedcategories=this.selectedcategories.filter(x=>x.id!=category.id)
      this.selectedcategoriesout.emit(this.selectedcategories)
    cat.removeClass("active")
    if(this.selectedcategories.length==0){
      $("#0").addClass("active")
      this.selectedcategories.push({_name:"All",id:0})
      this.selectedcategoriesout.emit(this.selectedcategories)
    }
    }
    else{
      //remove All Selection
      this.selectedcategories=this.selectedcategories.filter(x=>x.id!=0)
      $("#0").removeClass("active")
     //

      this.selectedcategories.push(category)
      this.selectedcategoriesout.emit(this.selectedcategories)
      cat.addClass("active")
    }
   }
  ngOnInit(): void {
    this.catserv.get().subscribe(x=>{
      this.categories=x
      this.categories.every(x=>this.all_count+=x.quantity)
    })
  }
  async openaddmodal(){
 
    return await this.addComponent.open()
  
}
}
