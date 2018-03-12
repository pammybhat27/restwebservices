import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormField, MatFormFieldModule, MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from './service/product.service';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';
import { FilterproductnamePipe } from './pipes/filterproductname.pipe';
import { ProductsortingComponent } from './productsorting/productsorting.component';
import { OrderpipePipe } from './pipes/orderpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    FilterproductnamePipe,
    ProductsortingComponent,
    OrderpipePipe,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
