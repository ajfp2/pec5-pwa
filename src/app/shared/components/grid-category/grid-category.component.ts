import { Component, Input } from '@angular/core';
import { CategoryDTO } from '../../../Category/models/category.dto';

@Component({
  selector: 'app-grid-category',
  templateUrl: './grid-category.component.html',
  styleUrl: './grid-category.component.scss'
})
export class GridCategoryComponent {
    catTableColums: string[] =["image", "name", "slug", "actions"];
    @Input() item: CategoryDTO[] = new Array();
}
