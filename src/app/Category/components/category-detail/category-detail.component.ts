import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from '../../models/category.dto';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss'
})
export class CategoryDetailComponent implements OnInit{
  categoria: CategoryDTO;
  idCat: string | null;
  constructor(private cs: CategoryService, private actRoute: ActivatedRoute, private loc: Location) {
    this.categoria = new CategoryDTO('', '', '');
    this.idCat = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
      if(this.idCat) this.cs.getCategoryById(this.idCat).subscribe(resp =>{ console.log(resp);
       this.categoria = resp;});
  }

  volver() {
    // this.router.navigateByUrl('/'); // Si siempre vuelve al home
    this.loc.back();
  }
}
