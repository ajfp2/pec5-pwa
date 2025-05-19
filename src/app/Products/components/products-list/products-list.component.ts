
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDTO } from '../../models/product.dto';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  productos: ProductDTO[];
  
  constructor(private ps: ProductService){
    this.productos = new Array<ProductDTO>();
    this.loadProductos();
  }

  private loadProductos(): void{
    this.ps.getCProduts().subscribe( resp => {
      console.log("Prdos", resp);
      
      this.productos = resp;
    });
  }
}
