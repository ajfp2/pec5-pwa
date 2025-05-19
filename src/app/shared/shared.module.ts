import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { GridComponent } from './components/grid/grid.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FormatDatePipe } from './Pipes/format-date.pipe';
import { CardCategoryComponent } from './components/card-category/card-category.component';







@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    GridComponent,
    FormatDatePipe,
    CardCategoryComponent
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
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  exports: [
    NavbarComponent, CardComponent, CardCategoryComponent
  ]
})


export class SharedModule { }
