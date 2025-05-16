import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class ProductModule { }
