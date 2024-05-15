import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Component, inject, Input} from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';


/**
 * @title Tab group with aligned labels
 */
@Component({
  selector: 'app-navbar-component',
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.css',
  standalone: false,
 
})
export class NavbarComponent {
  @Input() navItems!: string[]; // Array de cadenas para los elementos del navbar
  @Input() navbarColor!: string; // Color del navbar
  @Input() navbarRoutes!: string[]; 
  title = 'Sistema de Gestión de Horarios ITS YAVIRAC';
  condition: string = "default"; 
  changeCondition(name:string) {
    this.condition = name;
  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
