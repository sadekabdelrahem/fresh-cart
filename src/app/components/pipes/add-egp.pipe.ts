import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addEgp'
})
export class AddEgpPipe implements PipeTransform {

  transform(price:any):string {
    return `${price} EGP`;
  }

}
