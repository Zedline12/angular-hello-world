import { Component ,ViewChild} from '@angular/core';
import { EditmodalComponent } from 'src/app/features/supplier/modals/editmodal/editmodal.component';
@Component({
  selector: 'app-storemag',
  templateUrl: './storemag.component.html',
  styleUrls: ['./storemag.component.css']
})
export class StoremagComponent {
  @ViewChild('modal') private modalComponent!:EditmodalComponent
  async openmodal(){
    return await this.modalComponent.open()
 }
}
