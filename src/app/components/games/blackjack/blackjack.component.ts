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

  totalGambler : number[] = [0]
  totalBank : number[] = [0]

  deck :Deck|null = null
  started: boolean = false

  start(){
    
    this.initGame()

    this.totalGambler = this.gambler.getPoints()
    this.totalBank = this.bank.getPoints()

    if(this.totalGambler.includes(21) && this.totalBank.includes(21)){
      //draw
      this.stop()
    }else if(this.totalGambler.includes(21)){
      //gamb win *1.5
      this.stop()
    }else if(this.totalBank.includes(21)){
      //bank win
      this.stop()
    }

  }

  draw(player: Player) {    
    if (this.deck != null){
      player.draw(this.deck.cards)
      this.totalGambler = player.getPoints()

      // blackjack/21
      if(this.totalGambler.includes(21)){
        this.stop()
        //win
      }

      // busted
      if(this.totalGambler.length<2 && this.totalGambler[0]>21){
        this.stop()
        //lose
      }
    }
  }

  stop(){
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
