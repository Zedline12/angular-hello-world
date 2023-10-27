import { Component,ViewChild } from '@angular/core';
import { AddprComponent } from 'src/app/features/supplier/modals/addpr/addpr.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @ViewChild('addmodal') private addComponent!:AddprComponent
  async openaddmodal(){
      return await this.addComponent.open()
  }
}
