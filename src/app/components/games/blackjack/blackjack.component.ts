import { Component } from '@angular/core';
import Deck from './deck';
import {Gambler, Bank} from './player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blackjack.component.html',
})
export class BlackjackComponent {

  bank = new Bank()
  gambler = new Gambler()
  deck :Deck|null = null

  start(){
    this.bank.clearCards()
    this.gambler.clearCards()

    this.deck = new Deck()

    this.gambler.take(this.deck.cards);
    this.bank.take(this.deck.cards);
    this.gambler.take(this.deck.cards);
    this.bank.take(this.deck.cards);
  }

}
