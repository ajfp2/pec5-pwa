import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public vista: string;
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

  constructor(private router: Router, private ls: LoaderService) {
    this.vista = this.ls.getMode();
  }

  navigateTo(ruta: string): void {
    this.router.navigateByUrl(ruta);
  }

  changeMode(mode: string): void {
    this.vista = mode;
    this.ls.setMode(mode);
  }
}
