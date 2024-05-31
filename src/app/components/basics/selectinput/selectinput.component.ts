import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selectinput',
  standalone: false,
  templateUrl: './selectinput.component.html',
  styleUrl: './selectinput.component.css',

})
export class SelectinputComponent {
  @Input() title!: string;
}
