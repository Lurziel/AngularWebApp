import { Component } from '@angular/core';
import Deck from '../deck';
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

  deck :Deck = new Deck()
  started: boolean = false

  start(){
    
    this.initGame()

    if(this.gambler.isBlackjack() && this.bank.isBlackjack()){
      //draw
      this.stop()
    }else if(this.gambler.isBlackjack()){
      //gamb win *1.5
      this.stop()
    }else if(this.bank.isBlackjack()){
      //bank win
      this.stop()
    }

  }

  draw(player: Player) {    
      player.draw(this.deck.cards)

      // blackjack/21
      if(this.gambler.isBlackjack()){
        this.stop()
        //win
      }

      // busted
      if(this.gambler.isBusted()){
        this.stop()
        //lose
      }
  }

  stop(){
    this.started = false
    // player stoped without busting 
    if(!this.gambler.isBusted() && !this.gambler.isBlackjack()){

      //bank not at 17 
      while(this.bank.isBelow17()){
        this.bank.draw(this.deck.cards)
      }
    }
  }

  double(){

  }

  split(){

  }
  
  private initGame(){
    this.started = true
    this.bank.clearCards()
    this.gambler.clearCards()

    this.deck = new Deck()

    this.gambler.draw(this.deck.cards);
    this.bank.draw(this.deck.cards);
    this.gambler.draw(this.deck.cards);
    this.bank.draw(this.deck.cards);
  }

}
