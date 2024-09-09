import { Component } from '@angular/core';
import { ResultInputComponent } from '../../util/inputs/result-input/result-input.component';

@Component({
  selector: 'app-longest-common-prefix',
  standalone: true,
  imports: [ResultInputComponent],
  templateUrl: './longest-common-prefix.component.html',
})
export class LongestCommonPrefixComponent {
  result: string = "";

  check(value: Event) {
    let inputValue: string = (value.target as HTMLInputElement).value


    const strs = inputValue.replace(/\s/g, "").split(',')

    this.result =""

    if (strs.length < 1) return
    
    else if (strs.length < 2) {
      this.result = strs[0]
      return
    }
    const firstWord = strs[0]

    for (let i = 0; i < firstWord.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (firstWord[i] !== strs[j][i]) return
      }
      this.result += firstWord[i];
    }
  }
}
