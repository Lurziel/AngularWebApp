import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-displayer',
  standalone: true,
  imports: [],
  templateUrl: './score-displayer.component.html',
})
export class ScoreDisplayerComponent {
  @Input() score :string= ""  
}
