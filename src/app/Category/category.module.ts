import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { MatDividerModule } from '@angular/material/divider';




@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    HttpClientModule
  ]
})
export class CategoryModule { }
