import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Products/components/home/home.component';
import { ProductsListComponent } from './Products/components/products-list/products-list.component';
import { ProductDetailComponent } from './Products/components/product-detail/product-detail.component';
import { CategoriesListComponent } from './Category/components/categories-list/categories-list.component';
import { CategoryDetailComponent } from './Category/components/category-detail/category-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ecommerce- Dashboard' },
  { path: 'dashboard', component: HomeComponent, title: 'Ecommerce-DashBoard' },
  { path: 'productos', component: ProductsListComponent, title: 'Ecommerce- Listado Productos' },
  { path: 'product/:id', component: ProductDetailComponent, title: 'Ecommerce- Ficha Producto' },
  { path: 'categorias', component: CategoriesListComponent, title: 'Ecommerce- Listado Categorias' },
  { path: 'categoria/:id', component: CategoryDetailComponent, title: 'Ecommerce- Ficha Categoria' },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
