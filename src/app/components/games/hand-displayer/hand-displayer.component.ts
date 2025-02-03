import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardsDisplayerComponent } from '../cards-displayer/cards-displayer.component';
import Hand from '../blackjack/hand';

@Component({
  selector: 'app-hand-displayer',
  standalone: true,
  imports: [CommonModule, CardsDisplayerComponent],
  templateUrl: './hand-displayer.component.html',
})
export class HandDisplayerComponent {

  emptyHand: string[] = ["1B", "1B"]

  @Input() gameResult: number = -1
  gameResults: string[] = [
    "bg-blue-300 border-blue-500", // jackpot 0
    "bg-green-300 border-green-500", // win 1
    "bg-red-300 border-red-500", // lose 2
    "bg-slate-300 border-slate-500" // draw 3
  ]
  
  @Input() isPlaysingHand: boolean = false
  @Input() hand: Hand | null = null
  @Input() bet: number | undefined = undefined
}
