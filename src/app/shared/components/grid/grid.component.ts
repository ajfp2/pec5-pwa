import { Component, Input } from '@angular/core';
import { ProductDTO } from '../../../Products/models/product.dto';
import { CategoryDTO } from '../../../Category/models/category.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
    prodTableColums: string[] =["id", "title", "price", "category", "actions"];
    @Input() item: ProductDTO[] = new Array();
}
