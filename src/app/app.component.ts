import { Component,ContentChild ,ElementRef,OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  
  constructor(){
    console.log("d")
  }
  ngOnInit(): void {
    
  }
  get(event:any){
   
  }
}