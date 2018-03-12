import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../model/product.model';


@Pipe({
  name: 'filterproductname'
})
export class FilterproductnamePipe implements PipeTransform {

  transform(products: Product[], searchtext: string) {
    return products.filter(product => product.name.indexOf(searchtext) !== -1);
  }

}
