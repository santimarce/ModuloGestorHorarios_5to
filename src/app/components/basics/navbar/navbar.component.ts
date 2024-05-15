import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, Input } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { ElementoListaNavbar } from '../../../../models/drawclass';

@Component({
  selector: 'app-navbar-component',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  standalone: false,
})
export class NavbarComponent {
  @Input() navItems!: ElementoListaNavbar[]; // Array de cadenas para los elementos del navbar
  @Input() navbarColor!: string; // Color del navbar
  @Input() navbarIcons!: string[];
  @Input() navbarRoutes!: string[];
  title = 'Sistema de Gestión de Horarios ITS YAVIRAC';
  condition: string = 'default';

  changeCondition(name: string) {
    this.condition = name;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}