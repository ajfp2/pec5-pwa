import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public navItems = [
    {
      title: 'Dashboard',
      route: '',
      icon: 'dashboard',
    },
    {
      title: 'Categorias',
      route: 'categorias',
      icon: 'category',
    },
    {
      title: 'Productos',
      route: 'productos',
      icon: 'article',
    }
  ];

  constructor(private router: Router) {}

  navigateTo(ruta: string): void {
    this.router.navigateByUrl(ruta);
  }
}
