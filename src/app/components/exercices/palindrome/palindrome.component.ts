import { Component } from '@angular/core';
import { CheckInputComponent } from '../../util/inputs/check-input/check-input.component.js';

@Component({
  selector: 'app-palindrome',
  standalone: true,
  imports: [CheckInputComponent],
  templateUrl: './palindrome.component.html',
})
export class PalindromeComponent {

  result: boolean = true;
  check(value: Event) {
    let inputValue: string = (value.target as HTMLInputElement).value
    for (let i = 0; i < inputValue.length / 2; i++) {
      if (inputValue[i] !== inputValue[inputValue.length - i - 1]) {
        this.result = false;
        return;
      }
    }
    this.result = true;
  }

}
