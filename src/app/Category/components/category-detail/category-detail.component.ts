import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../../models/category.dto';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductDTO } from '../../../Products/models/product.dto';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss'
})
export class CategoryDetailComponent implements OnInit{
  categoria: CategoryDTO;
  idCat: string | null;
  prodsCat: ProductDTO[];

  constructor(private cs: CategoryService, private actRoute: ActivatedRoute, private loc: Location, public ls: LoaderService) {
    this.categoria = new CategoryDTO('', '', '');
    this.idCat = this.actRoute.snapshot.paramMap.get('id');
    this.prodsCat = new Array<ProductDTO>();
  }

  ngOnInit(): void {
      if(this.idCat) {
        this.cs.getCategoryById(this.idCat).subscribe(resp =>{
          this.categoria = resp;
        });
        this.cs.getProductsCategoryById(this.idCat).subscribe( resp => {
          this.prodsCat = resp;
        });
      }
  }

  volver() {
    // this.router.navigateByUrl('/'); // Si siempre vuelve al home
    this.loc.back();
  }
}
