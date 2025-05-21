import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDTO } from '../../models/product.dto';
import { CategoryDTO } from '../../../Category/models/category.dto';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  private incremento = 10;
  private idProduct: string | null;
  public product: ProductDTO;
  public imageMain: string;

  //slider
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = true;
  valor_slider = 50;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ps: ProductService, private loc: Location) {
    this.idProduct = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = new ProductDTO('', '', 0, '', new CategoryDTO('', '', ''), new Date(), []);
    this.imageMain = '';
  }

  ngOnInit(): void {
    if(this.idProduct){
      this.ps.getProductById(this.idProduct).subscribe(prod => {
        console.log(prod);
        this.product = prod; 
        this.imageMain = prod.images[0];
      });
    }
      
  }

  calcularIncremento(pvp: number): number{
    return pvp + (pvp*(this.incremento / 100));
  }

  changeMainImage(ruta: string): void {
    if(this.imageMain) this.imageMain = ruta;
  }

  calcularValoracion(valor: number) {
    console.log("Estrellas ", (valor / 20));
    


    this.valor_slider = valor;
  }

  volver() {
    // this.router.navigateByUrl('/'); // Si siempre vuelve al home
    this.loc.back();
  }

}
