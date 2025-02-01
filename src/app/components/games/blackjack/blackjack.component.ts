import { Component, Input } from '@angular/core';
import Deck from '../deck';
import { Gambler, Bank, Player } from './player';
import { CommonModule } from '@angular/common';
import { CardDisplayerComponent } from '../card-displayer/card-displayer.component';
import { ButtonComponent } from '../../util/button/button.component';
import { FormsModule } from '@angular/forms';
const INIT_BET = 10

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [CommonModule, CardDisplayerComponent, ButtonComponent, FormsModule],
  templateUrl: './blackjack.component.html',
})
export class BlackjackComponent {

  bank = new Bank()
  gambler = new Gambler()

  emptyHand: string[] = ["1B", "1B"]
  deck: Deck = new Deck()

  mainBet: number = INIT_BET
  bets: number[] = []

  playingHand: number = 0;
  started: boolean = false

  canDouble(handNumber: number): boolean { return this.gambler.canDouble(handNumber, this.mainBet) }
  canSplit(handNumber: number): boolean { return this.gambler.canSplit(handNumber) }

  start() {
    if (this.mainBet < 5 || this.mainBet > 500 || this.mainBet > this.gambler.getTokens()) return

    this.initGame()

    this.bets[0] = this.mainBet
    this.gambler.bet(this.mainBet)
    if (this.gambler.isBlackjack(0) && this.bank.isBlackjack(0)) {
      //draw blackjack
      this.gameDraw(0)
    } else if (this.gambler.isBlackjack(0)) {
      //gamb win *1.5
      this.gamblerWin(0)
    } else if (this.bank.isBlackjack(0)) {
      //bank win
      this.gamblerLose(0)
    }
  }

  gamblerHit(handNumber: number, player: Player) {
    player.hit(handNumber, this.deck.cards)

    // 21 or busted
    if (this.gambler.isBlackjack(handNumber) || this.gambler.isBusted(handNumber)) {
      this.gamblerStop()
    }

  }

  gamblerStop() {
    this.playingHand += 1
    if (this.playingHand > this.gambler.getNumberOfHand() - 1) this.gameEnd()
  }

  gameEnd() {
    this.started = false

    if(this.gambler.isAllBusted()) return

    //bank draw : not at 17 
    while (this.bank.isBelow17()) {
      this.bank.hit(0, this.deck.cards)
    }

    for (let i = 0; i < this.gambler.getNumberOfHand(); i++) {

      // gambler busted hand
      if (this.gambler.isBusted(i)) {
        this.gamblerLose(i)
      }
      // player win
      else if (this.bank.isBusted(0) || this.bank.getHighestPlayablePoint(0) < this.gambler.getHighestPlayablePoint(i)) {
        this.gamblerWin(i)
      }
      // game draw
      else if (this.bank.getHighestPlayablePoint(0) == this.gambler.getHighestPlayablePoint(i)) {
        this.gameDraw(i)
      }
      // lose
      else {
        this.gamblerLose(i)
      }
    }
    this.mainBet = INIT_BET
  }

  gamblerWin(handNumber: number): void {
    this.started = false
    this.gambler.win(this.bets[handNumber] * 2)
    if (this.gambler.isBlackjack(handNumber)) {
      this.gambler.win(this.bets[handNumber] * 0.5)
    }
  }

  gameDraw(handNumber: number) {
    this.started = false
    this.gambler.win(this.bets[handNumber])
  }

  gamblerLose(handNumber: number): void {
    // Afficher perdu
    this.started = false

  }

  double(handNumber: number) {
    if (!this.canDouble(handNumber)) return

    this.gambler.bet(this.bets[handNumber])
    this.bets[handNumber] *= 2

    this.gamblerHit(handNumber, this.gambler)
    if (!this.gambler.isBusted(handNumber)) this.gameEnd()
  }

  split(handNumber: number) {
    this.gambler.split(handNumber, this.deck.cards)
    this.bets.push(this.mainBet)
  }

  private initGame() {

    this.started = true
    this.playingHand = 0

    this.bank.clearCards()
    this.gambler.clearCards()

    this.deck = new Deck()

    this.gambler.hit(0, this.deck.cards);
    this.bank.hit(0, this.deck.cards);
    this.gambler.hit(0, this.deck.cards);
    this.bank.hit(0, this.deck.cards);
  }

}
