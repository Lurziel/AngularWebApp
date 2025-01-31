import { Component, Input } from '@angular/core';
import Deck from '../deck';
import {Gambler, Bank, Player} from './player';
import { CommonModule } from '@angular/common';
import { CardDisplayerComponent } from '../card-displayer/card-displayer.component';
import { ButtonComponent } from '../../util/button/button.component';
import Card from './card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [CommonModule, CardDisplayerComponent, ButtonComponent, FormsModule],
  templateUrl: './blackjack.component.html',
})
export class BlackjackComponent {

  bank = new Bank()
  gambler = new Gambler()

  emptyHand : Card[] = [new Card("1","B"),new Card("1","B")]

  deck :Deck = new Deck()
  started: boolean = false

  bet : number= 5

  start() {
    if (this.bet < 5 || this.bet > 500 || this.bet > this.gambler.getTokens()) return

    this.initGame()
    this.gambler.bet(this.bet)
    
    if(this.gambler.isBlackjack() && this.bank.isBlackjack()){
      //draw
      this.gameDraw()
    }else if(this.gambler.isBlackjack()){
      //gamb win *1.5
      this.gamblerWin()
    }else if(this.bank.isBlackjack()){
      //bank win
      this.gamblerLose()
    }
  }

  gamblerDraw(player: Player) {    
      player.draw(this.deck.cards)

      // blackjack/21
      if(this.gambler.isBlackjack()){
        this.gamblerWin()
      }

      // busted
      if(this.gambler.isBusted()){
        this.gamblerLose()
      }
  }

  gamblerStop() {

    //bank draw : not at 17 
    while (this.bank.isBelow17()) {
      this.bank.draw(this.deck.cards)
    }

    //player win
    if(this.bank.isBusted()|| this.bank.getHighestPlayablePoint()<this.gambler.getHighestPlayablePoint()){
      this.gamblerWin()
    }
    //game draw
    else if(this.bank.getHighestPlayablePoint() == this.gambler.getHighestPlayablePoint()){
      this.gameDraw()
    }
    //lose
    else{
      this.gamblerLose()
    }
  }

  gamblerWin(): void{
    this.started = false
    this.gambler.win(this.bet*2)
    if(this.gambler.isBlackjack()){
      this.gambler.win(this.bet*0.5)
    }
  }
  
  gameDraw(){
    this.started = false
    this.gambler.win(this.bet)
  }

  gamblerLose(): void{
    this.started = false
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
