import { Component,ContentChild ,ElementRef,OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  
  constructor(){
  
  }
  ngOnInit(): void {
   // <app-header></app-header>
  //  <router-outlet></router-outlet>
    
   // <app-footer></app-footer>
  }
  get(event:any){
   
  }
}
