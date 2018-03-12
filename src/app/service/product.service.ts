import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {
  baseUrl = 'http://localhost:3000';


  constructor(private httpClient: HttpClient) { }

  get_products() {
    return this.httpClient.get(this.baseUrl + '/products');
  }

}
