import Deck from "../deck"
import Card from "./card"
import Hand from "./hand"

abstract class Player {

    protected hands: Hand[] = [new Hand()]
    getHands(): Hand[] { return this.hands }

    getAllCardImages(): string[][] {
        return this.hands.map(c => c.getCardImages())
    }
    clearCards(): void { this.hands = [new Hand()] }

    hit(handNumber: number, cards: Card[]): void { this.hands[handNumber].hit(cards) }

    getPoints(handNumber: number): number[] { return this.hands[handNumber].getPoints() }
    getHighestPlayablePoint(handNumber: number): number { return this.hands[handNumber].getHighestPlayablePoint() }
    isBusted(handNumber: number): boolean { return this.hands[handNumber].isBusted() }
    isBlackjack(handNumber: number): boolean { return this.hands[handNumber].isBlackjack() }
    isBelow17(): boolean { return this.hands[0].isBelow17() }
    getNumberOfCard(handNumber: number): number { return this.hands[handNumber].numberOfCard() }

}

class Bank extends Player { }

class Gambler extends Player {
    private tokens: number = 500
    getTokens(): number { return this.tokens }

    bet(n: number): void {
        if (this.tokens < n) return
        this.tokens -= n
    }

    win(n: number): void {
        this.tokens += n
    }

    getNumberOfHand(): number { return this.hands.length }
    getAllPoints(handNumber: number): number[] { return this.hands[handNumber].getPoints() }
    split(handNumber: number, cards: Card[]): void {
        if (!this.canSplit(handNumber)) return

        this.hands.push(new Hand(this.hands[handNumber].getCard(1)))

        this.hands[handNumber].removeLastCard()
        this.hands[handNumber].hit(cards)

        this.hands[this.hands.length - 1].hit(cards)
    }

    canSplit(handNumber: number): boolean { return this.hands[handNumber].canSplit() && this.getNumberOfHand() < 4 }
    canDouble(handNumber: number, bet: number): boolean { return this.getNumberOfCard(handNumber) < 3 && bet <= this.getTokens() }
    isAllBusted():boolean{
        for(let i=0;i<this.getNumberOfHand();i++)
            if(!this.hands[i].isBusted()) return false
        return true
    }
}

export { Bank, Gambler, Player }