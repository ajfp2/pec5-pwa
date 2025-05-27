import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDTO } from '../../models/product.dto';
import { map } from 'rxjs/operators';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  valor1: number = 0;
  valor2: number = 3000;
  prodTopVentas: ProductDTO[];
  customers: any[];

  constructor(private ps: ProductService, public ls: LoaderService) {
    this.prodTopVentas = new Array<ProductDTO>;
    this.customers = new Array<any>;
    this.loadDashboard();
  }

  private loadDashboard() {
    this.ps.getProductsPrice(this.valor1, this.valor2).subscribe( resp => {
      this.prodTopVentas = resp;
    });
    
    this.ps.getMostCustomer().pipe(
      map((resp: any[]) => resp.slice(0, 5))
    ).subscribe(resp => this.customers = resp );
  }
}
