import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token-displayer',
  standalone: true,
  imports: [],
  templateUrl: './token-displayer.component.html',
})
export class TokenDisplayerComponent {
  @Input() number : number = 0
}
