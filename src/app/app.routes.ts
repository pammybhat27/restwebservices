import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductsortingComponent} from './productsorting/productsorting.component';

export const routes: Routes = [

  {path: '' , component: HomeComponent},
  {path: 'product' , component: ProductComponent},
  {path: 'productsorting' , component: ProductsortingComponent}
];
