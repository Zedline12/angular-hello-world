import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
width!:any
ngOnInit(): void {
  this.width=window.innerHeight
  window.addEventListener("resize",()=>{
    this.width=window.innerWidth
  })
}
}
