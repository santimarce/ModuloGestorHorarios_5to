import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botonsimple',
  templateUrl: './botonsimple.component.html',
  styleUrl: './botonsimple.component.css'
})
export class BotonsimpleComponent {
  @Input()
  title!: string;
  @Input()
  colorbtn!: string;
}