import { Component, Input } from '@angular/core';
import { LinkButtonComponent } from '../../link-button/link-button.component';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [LinkButtonComponent],
  templateUrl: './small-card.component.html',
})
export class SmallCardComponent {
  @Input() name:string = ""
  @Input() description : string = ""
  @Input() href:string = ""
}
