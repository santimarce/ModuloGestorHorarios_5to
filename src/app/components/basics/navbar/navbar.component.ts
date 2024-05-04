import {Component, Input} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


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
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
