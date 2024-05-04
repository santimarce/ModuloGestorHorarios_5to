import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-textoinput',
  templateUrl: './textoinput.component.html',
  styleUrl: './textoinput.component.css'
})
export class TextoinputComponent {
  @Input() title!: string;
  @Input() colorinp!: ThemePalette;
}