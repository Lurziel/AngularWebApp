import { Component } from '@angular/core';
import { ResultInputComponent } from '../../util/inputs/result-input/result-input.component';

@Component({
  selector: 'app-first-missing-positive',
  standalone: true,
  imports: [ResultInputComponent],
  templateUrl: './first-missing-positive.component.html',
})
export class FirstMissingPositiveComponent {
  result: string = "";

  check(value: Event) {
    let inputValue: string = (value.target as HTMLInputElement).value

    let nums: string[] = inputValue.replace(/\s/g, '').split(',')
    let smallestPositive = 1;

    nums = nums.sort((a: string, b: string) => +a - +b)

    for (let i = 0; i < nums.length; i++) {
      if (+nums[i] >= smallestPositive) {

        if (+nums[i] !== smallestPositive) {
          this.result = smallestPositive.toString()
          return;
        }
        smallestPositive++;
      }
    }

    this.result = smallestPositive.toString()
  }
}
