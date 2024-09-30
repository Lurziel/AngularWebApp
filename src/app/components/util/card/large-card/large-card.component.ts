import { Component, Input } from '@angular/core';
import { LinkButtonComponent } from '../../link-button/link-button.component';

@Component({
  selector: 'app-large-card',
  standalone: true,
  imports: [LinkButtonComponent],
  templateUrl: './large-card.component.html',
})
export class LargeCardComponent {
  @Input() name =""
  @Input() description =""
  @Input() img =""
  @Input() href=""
}
