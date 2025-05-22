import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

// Angular MAterial
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from "../shared/shared.module";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    SharedModule
]
})
export class CategoryModule { }
