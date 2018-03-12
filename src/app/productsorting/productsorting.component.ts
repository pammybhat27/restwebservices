import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener  } from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-productsorting',
  templateUrl: './productsorting.component.html',
  styleUrls: ['./productsorting.component.css']
})

export class ProductsortingComponent implements OnInit  {

  order: number;
  products: Product[];
  path: string[] = ['product'];
  order  = 1;
  constructor(private ps: ProductService) {


  }

  ngOnInit(): void {
    this.ps.get_products().subscribe((res: Product[]) => {
      this.products = res;
      console.log(this.products);
    });
  }

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }




}
