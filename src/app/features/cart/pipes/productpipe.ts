import {Pipe, PipeTransform} from '@angular/core';  
import { product } from 'src/app/core/models/product';
@Pipe ({  
  name : 'pro'  
})  
export class SqrtPipe implements PipeTransform {  
  transform(id : number,productt:product[]):product {  
    return productt.find(item=>item.id==id)!
  }  
}  