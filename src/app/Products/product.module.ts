import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// Angular Material
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from "../shared/shared.module";




@NgModule({
  declarations: [
    HomeComponent,
    ProductsListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    SharedModule
]
})
export class ProductModule { }
