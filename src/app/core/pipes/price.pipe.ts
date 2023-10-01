import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value:Number):any{
    let price=value.toString()
    if(price.length==4){
      return price.slice(0,1)+","+price.slice(1)
    }
    if(price.length==5){
      return price.slice(0,2)+","+price.slice(2)
    }
    else if(price.length>5){
      return price.slice(0,3)+","+price.slice(3)
    }
    else{
      return price
    }
  }

}
