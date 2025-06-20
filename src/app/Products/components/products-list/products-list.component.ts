
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDTO } from '../../models/product.dto';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  productos: ProductDTO[];
  
  constructor(private ps: ProductService, public ls: LoaderService){
    this.productos = new Array<ProductDTO>();
    this.loadProductos();
  }

  private loadProductos(): void{
    this.ps.getProduts().subscribe( resp => {
      this.productos = resp;
    });
  }
}
