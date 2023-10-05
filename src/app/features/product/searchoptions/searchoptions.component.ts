import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchoptions',
  templateUrl: './searchoptions.component.html',
  styleUrls: ['./searchoptions.component.css']
})
export class SearchoptionsComponent implements OnInit {
  width!:any
ngOnInit(): void {
 this.width=window.innerHeight
  window.addEventListener("resize",()=>{
    this.width=window.innerWidth
  })
}

}
