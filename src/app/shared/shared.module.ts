import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { GridComponent } from './components/grid/grid.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { GridCategoryComponent } from './components/grid-category/grid-category.component';

// Pipes
import { FormatDatePipe } from './Pipes/format-date.pipe';
import { DefaultImagePipe } from './Pipes/default-image.pipe';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    GridComponent,
    SpinnerComponent,
    FormatDatePipe,
    CardCategoryComponent,
    DefaultImagePipe,
    StarRatingComponent,
    GridCategoryComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatTableModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  exports: [
    NavbarComponent, CardComponent, GridComponent, CardCategoryComponent, GridCategoryComponent, DefaultImagePipe, FormatDatePipe, StarRatingComponent
  ]
})


export class SharedModule { }
