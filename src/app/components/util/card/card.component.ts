import { Component, Input } from '@angular/core';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LinkButtonComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() name:string = ""
  @Input() description : string = ""
  @Input() href:string = ""
}
