import { Component } from '@angular/core';
import { CategoryDTO } from '../../models/category.dto';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {

  categorias: CategoryDTO[];

  constructor(private catService: CategoryService) {
    this.categorias = new Array<CategoryDTO>();
    this.loadCategorias();
  }

  private loadCategorias(): void{
    this.catService.getCategories().subscribe( resp => {
      console.log("Cate SEr", resp);
      
      this.categorias = resp;
    });
  }

}
