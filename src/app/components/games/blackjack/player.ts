import Card from "./card"
import Hand from "./hand"

abstract class Player {
    private cards: Hand = new Hand()

    getCardImages(): string[] {
        let result = this.cards.getCardImages()
        return result.length > 1 ? result : ['1B', '1B']
    }
    clearCards(): void { this.cards = new Hand() }

    draw(cards: Card[]): void { this.cards.draw(cards) }

    getPoints(): number[] { return this.cards.getPoints() }
    getHighestPlayablePoint(): number { return this.cards.getHighestPlayablePoint() }
    isBusted(): boolean { return this.cards.isBusted() }
    isBlackjack(): boolean { return this.cards.isBlackjack() }
    isBelow17(): boolean { return this.cards.isBelow17() }

}

class Bank extends Player {

}

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

}

export { Bank, Gambler, Player }