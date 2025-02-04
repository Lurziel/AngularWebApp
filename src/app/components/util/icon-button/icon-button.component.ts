import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() name = "default"
  @Input() color = ""
  @Input() src : string = ""
}