import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-prcard',
  templateUrl: './prcard.component.html',
  styleUrls: ['./prcard.component.css']
})
export class PrcardComponent implements OnInit {
@Input() product!:{_name:string,image:string,price:number}
ngOnInit(): void {
  
}

selected(product:any){

}
}
