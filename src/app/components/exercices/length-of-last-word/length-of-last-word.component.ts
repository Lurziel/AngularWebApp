import { Component } from '@angular/core';
import { ResultInputComponent } from '../../util/inputs/result-input/result-input.component';

@Component({
  selector: 'app-length-of-last-word',
  standalone: true,
  imports: [ResultInputComponent],
  templateUrl: './length-of-last-word.component.html',
})
export class LengthOfLastWordComponent {
  result: string = "";

  check(event: any) {
    let inputValue: string = event.target.value

    let s = inputValue.trim()
    if (s.lastIndexOf(" ") < 0) {
      this.result = s.length.toString()
    }else{
      this.result = (s.length - 1 - s.lastIndexOf(" ")).toString()

    }
  }
}
