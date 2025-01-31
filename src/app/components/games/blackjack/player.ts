import Card from "./card"
import Hand from "./hand"

abstract class Player{
    private cards: Hand = new Hand()

    getCardImages(): string[] { return this.cards.getCardImages() }
    clearCards(): void { this.cards = new Hand() }

    draw(cards: Card[]): void { this.cards.draw(cards) }

    getPoints(): number[] { return this.cards.getPoints() }
    isBusted(): boolean { return this.cards.isBusted() }
    isBlackjack(): boolean { return this.cards.isBlackjack() }
    isBelow17(): boolean { return this.cards.isBelow17() }
    
}

class Bank extends Player{
    
}

class Gambler extends Player{
    tokens :number = 500
}

export {Bank, Gambler, Player}