import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  @Input() imageUrl!: string; // Input to receive the image URL
  @Input() nombrePlaceholder!: string; // New input to receive the user's nam
  @Input() emailPlaceholder!: string; // Input to receive the email placeholder


  constructor() {}
}
