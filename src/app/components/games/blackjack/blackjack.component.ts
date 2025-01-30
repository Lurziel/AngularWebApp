import { Component } from '@angular/core';
import Deck from './deck';
import {Gambler, Bank, Player} from './player';
import { CommonModule } from '@angular/common';
import { CardDisplayerComponent } from '../card-displayer/card-displayer.component';
import { ButtonComponent } from '../../util/button/button.component';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [CommonModule, CardDisplayerComponent, ButtonComponent],
  templateUrl: './blackjack.component.html',
})
export class BlackjackComponent {

  bank = new Bank()
  gambler = new Gambler()
  deck :Deck|null = null
  started: boolean = false

  start(){
    this.started = true
    this.bank.clearCards()
    this.gambler.clearCards()

    this.deck = new Deck()

    this.gambler.draw(this.deck.cards);
    this.bank.draw(this.deck.cards);
    this.gambler.draw(this.deck.cards);
    this.bank.draw(this.deck.cards);
  }

  draw(player: Player) {    
    if (this.deck != null)
      player.draw(this.deck.cards)
  }

  stop(){
    this.started = false
    
  }

  double(){

  }

  split(){

  }

}
