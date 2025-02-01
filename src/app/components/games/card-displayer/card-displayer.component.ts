import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-displayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-displayer.component.html',
})
export class CardDisplayerComponent {
  //in class, the variable name must be complete
  position: string[] = []
  @Input() cards: string[] | null = null
  @Input() hideCard: number|undefined = undefined

  constructor(){
    for(let i=0;i<10;i++){
      this.position.push(`left-${i*5}`)
    }
  }

}
