import { Component,ViewChild } from '@angular/core';
import { EditmodalComponent } from 'src/app/features/supplier/modals/editmodal/editmodal.component';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  @ViewChild('modall') private modalComponent!:EditmodalComponent

  async openmodal(){
    return await this.modalComponent.open()
 }
}
