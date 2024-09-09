import { Component } from '@angular/core';
import { CheckInputComponent } from '../../util/inputs/check-input/check-input.component';

@Component({
  selector: 'app-balises',
  standalone: true,
  imports: [CheckInputComponent],
  templateUrl: './balises.component.html',
})
export class BalisesComponent {

  result: boolean = true;

  check(value: Event) {
    let inputValue: string = (value.target as HTMLInputElement).value

    const opening = ['(', '{', '[']
    const closing = [')', '}', ']']
    let toCheck = []

    for (let i = 0; i < inputValue.length; i++) {
      const openingIndex = opening.indexOf(inputValue[i])
      if (openingIndex > -1) {
        toCheck.push(openingIndex)
      } else {
        const indexOpening = closing.indexOf(inputValue[i]);
        if (toCheck[toCheck.length - 1] === indexOpening) {
          toCheck.pop()
        }
        else {
          this.result = false
          return;
        }
      }
    }
    this.result = !(toCheck.length > 0)
  }
}