import { Component } from '@angular/core';
import { ResultInputComponent } from '../../util/inputs/result-input/result-input.component';

@Component({
  selector: 'app-majority-element',
  standalone: true,
  imports: [ResultInputComponent],
  templateUrl: './majority-element.component.html',
})
export class MajorityElementComponent {
  result: string = "";

  check(event: any) {
    let inputValue: string = event.target.value
    const nums = inputValue.replace(/\s/g, "").split(',')

    let result:any[] = []
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== '') {
            if (result[+nums[i]] === undefined) {
                result[+nums[i]] = '1'
            } else {
                result[+nums[i]]++
            }
            if (result[+nums[i]] >= nums.length / 2) {
              this.result = nums[i]
              return
            }
        }

    }
    this.result = "/"
  }
}
