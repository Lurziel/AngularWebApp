import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from '../../util/icon-button/icon-button.component';
import Deck from '../deck';
import { HandDisplayerComponent } from "../hand-displayer/hand-displayer.component";
import { TokenDisplayerComponent } from "../token-displayer/token-displayer.component";
import { Bank, Gambler, Player } from './player';

const INIT_BET = 10

const LOSE = 2
const WIN = 1
const BLACKJACK = 0
const DRAW = 3

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [CommonModule, IconButtonComponent, FormsModule, HandDisplayerComponent, TokenDisplayerComponent],
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

  hideDealerCard : number[] = []
  gamesResult : number[] = []

  //TODO total win/lose

  canDouble(handNumber: number): boolean { return this.gambler.canDouble(handNumber, this.mainBet) }
  canSplit(handNumber: number): boolean { return this.gambler.canSplit(handNumber) }

  start() {
    if (this.mainBet < 5 || this.mainBet > 500 || this.mainBet > this.gambler.getTokens()) return
    this.initGame()

    this.gambler.bet(this.mainBet)
    if (this.gambler.isBlackjack(0) || this.bank.isBlackjack(0)) {
      if(this.bank.isBlackjack(0)) this.gamesResult[4] = 0
      this.playingHand+=1
      this.gameEnd()
    }
  }

  gamblerHit(handNumber: number, player: Player) {
    player.hit(handNumber, this.deck.cards)

    if (this.gambler.isBusted(handNumber)) {
      this.gamblerPass()
    }

  }

  gamblerPass(): void {
    this.playingHand += 1
    if (this.playingHand > this.gambler.getNumberOfHand() - 1) {
      this.gameEnd()
      return
    }
    if (this.gambler.isBlackjack(this.playingHand)) {
      this.gamblerPass()
    }
  }

  gameEnd() {
    this.started = false
    this.hideDealerCard = []

    if (!this.gambler.isAllBusted() && !this.gambler.isAllBlackjack()) {
      //bank draw if not at 17 
      while (this.bank.isBelow17()&& !this.deck.isEmpty()) {
        this.bank.hit(0, this.deck.cards)
      }
    }

    for (let i = 0; i < this.gambler.getNumberOfHand(); i++) {

      // gambler win blackjack
      if(this.gambler.isBlackjack(i) && ! this.bank.isBlackjack(0)){
        this.gamblerWin(i)
      }
      // gambler busted hand
      else if (this.gambler.isBusted(i)) {
        this.gamblerLose(i)
      }
      // player win
      else if (this.bank.isBusted(0) || this.bank.getHighestPlayablePoint(0) < this.gambler.getHighestPlayablePoint(i)) {
        this.gamblerWin(i)
      }
      // game draw
      else if (this.bank.getHighestPlayablePoint(0) === this.gambler.getHighestPlayablePoint(i)) {
        this.gameDraw(i)
      }
      // lose
      else {
        this.gamblerLose(i)
      }
    }
  }

  gamblerWin(handNumber: number): void {
    this.gambler.win(this.bets[handNumber] * 2)
    if (this.gambler.isBlackjack(handNumber)) {
      this.gambler.win(this.bets[handNumber] * 0.5)
      this.gamesResult[handNumber] = BLACKJACK
      return
    }
    this.gamesResult[handNumber] = WIN
  }

  gameDraw(handNumber: number) {
    this.gambler.win(this.bets[handNumber])
    this.gamesResult[handNumber] = DRAW
  }

  gamblerLose(handNumber: number): void {
    // Afficher perdu
    this.gamesResult[handNumber] = LOSE
  }

  double(handNumber: number) {
    if (!this.canDouble(handNumber)) return

    this.gambler.bet(this.bets[handNumber])
    this.bets[handNumber] *= 2

    this.gamblerHit(handNumber, this.gambler)
    //hit always pass when busted
    if (!this.gambler.isBusted(handNumber)) this.gamblerPass()
  }

  split(handNumber: number) {
    this.gambler.split(handNumber, this.deck.cards)
    this.gambler.bet(this.mainBet)
    this.bets.push(this.mainBet)
    if(this.gambler.isBlackjack(handNumber)){
      this.gamblerPass()
    }
  }

  private initGame() {

    this.started = true
    this.playingHand = 0
    this.hideDealerCard.push(1)
    this.gamesResult = [-1,-1,-1,-1,-1]
    this.bets = [this.mainBet]

    this.bank.clearCards()
    this.gambler.clearCards()

    this.deck = new Deck()

    this.gambler.hit(0, this.deck.cards);
    this.bank.hit(0, this.deck.cards);
    this.gambler.hit(0, this.deck.cards);
    this.bank.hit(0, this.deck.cards);
  }

}
