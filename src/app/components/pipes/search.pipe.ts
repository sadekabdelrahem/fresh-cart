import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList:Iproduct[] , searchTerm:string ):Iproduct[] {
    return productList.filter((product)=> product.title.toLowerCase().includes(searchTerm.toLowerCase()) );
  }

}
