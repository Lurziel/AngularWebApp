import { Component } from '@angular/core';
import { ResultInputComponent } from '../../util/inputs/result-input/result-input.component';

@Component({
  selector: 'app-maximum-subarray',
  standalone: true,
  imports: [ResultInputComponent],
  templateUrl: './maximum-subarray.component.html',
})
export class MaximumSubarrayComponent {
  result: string = "";

  check(event: any) {
    let inputValue: string = event.target.value
    inputValue = inputValue.replace(/\s/g, "")
    
    this.result = `/`
    if(inputValue === '') return

    let temp:string[] = inputValue.split(',')
    if (temp.some(num => num === '')) {
      this.result = "Contient un élément vide"
      return
    }
    
    let nums:number[] = temp.map(Number)
    
    if (nums.some(num => Number.isNaN(num))) {
      this.result = "Erreur d'encodage"
      return
    }

    if (nums.length > 0) {
        let result = { total: Math.min(...nums), indexStart: 0, indexEnd: nums.length }

        for (let i = 0; i < nums.length; i++) {
            let temp = nums[i]
            if (temp > result.total) result = { total: temp, indexStart: i, indexEnd: i + 1 }
            for (let j = i + 1; j < nums.length; j++) {
                temp += nums[j]
                if (temp > result.total) result = { total: temp, indexStart: i, indexEnd: j + 1 }

            }
        }
        this.result = `${result.total} avec ${nums.slice(result.indexStart, result.indexEnd)}`
        return 
    }
  }
}
