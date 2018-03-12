import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product.model';
import {ProductService} from '../service/product.service';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent implements OnInit {

  private products: Product[] = [];

  searchText = '';
  searchTextId = 4;
// Declared to store the stream of observables returned from product service




  constructor(private ps: ProductService) {
    // Store the observables returned from the Api call
this.ps.get_products().subscribe((res: Product[]) => {
  this.products = res;
  console.log(this.products);
});

  }

  ngOnInit() {
  }

}
