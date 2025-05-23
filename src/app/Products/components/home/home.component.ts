import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDTO } from '../../models/product.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  valor1: number = 10;
  valor2: number = 999;
  prodTopVentas: ProductDTO[];
  customers: any[];

  constructor(private ps: ProductService) {
    this.prodTopVentas = new Array<ProductDTO>;
    this.customers = new Array<any>;
    this.loadDashboard();
  }

  private loadDashboard() {
    this.ps.getProductsPrice(10, 9999).subscribe( resp => {
      this.prodTopVentas = resp;
    });
    this.ps.getMostCustomer().subscribe(resp => this.customers = resp );
  }
}
