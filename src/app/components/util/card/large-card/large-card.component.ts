import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-card',
  standalone: true,
  imports: [],
  templateUrl: './large-card.component.html',
})
export class LargeCardComponent {
  @Input() name =""
  @Input() description =""
  @Input() img =""
}
