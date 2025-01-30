import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-displayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-displayer.component.html',
})
export class CardDisplayerComponent {

  @Input() cards : string[]|null = null
  
}
