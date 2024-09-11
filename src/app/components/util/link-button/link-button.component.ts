import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [],
  templateUrl: './link-button.component.html',
})
export class LinkButtonComponent {
  @Input() href =""
  @Input() name =""
}
