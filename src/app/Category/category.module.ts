import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from "../shared/shared.module";
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    SharedModule
]
})
export class CategoryModule { }
