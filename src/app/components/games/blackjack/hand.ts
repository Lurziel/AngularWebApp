import Card from "./card";

export default class Hand {

    private cards: Card[]

    constructor(...cards: Card[]) {
        this.cards = cards
    }

    private busted: boolean = false
    isBusted() { return this.busted }

    private blackjack: boolean = false
    isBlackjack() { return this.blackjack }

    private points: number[] = [0]
    getPoints() { return this.points }

    getMaxPlayableValue(): number {
        return Math.max(...this.points)
    }

    isBelow17(): boolean {
        return this.getMaxPlayableValue() < 17
    }

    getCardImages(): string[] {
        return this.cards.map(c => c.getImage())
    }

    hit(cards: Card[]): void {
        let card = cards.shift()
        if (card != undefined) {
            this.cards.push(card)
            this.setPoints()
        }
    }

    numberOfCard(): number {
        return this.cards.length
    }

    private setPoints(): void {
        this.getTotal()
        //if blackjack
        if (this.points.includes(21)) {
            if (this.cards.length < 3) this.blackjack = true
            this.points = [21]
            return
        }
        //if busted
        let min = Math.min(...this.points)
        if (min > 21) {
            this.busted = true
            this.points = [min]
            return
        }
        // remove busted value
        this.points = this.points.filter(t => t < 22)
    }

    private getTotal(): void {

        this.points = [0]
        // run cards
        this.cards.forEach(c => {
            //check if 1 and 11 for aces
            let temp: number[] = []
            if (c.getCardValue().length > 1) {
                temp = this.points.map(t => c.getCardValue()[1] + t)
            }

            // run totals
            this.points = this.points.map(t => c.getCardValue()[0] + t)
            this.points.push(...temp)
        })
        // order values and remove duplicate values (double aces)
        this.points.sort((a, b) => a - b)
        this.points = this.points.filter((item, index) => this.points.indexOf(item) === index);
    }

    getHighestPlayablePoint(): number {
        return this.points[this.points.length - 1];
    }

    canSplit(): boolean {
        return this.cards.length <= 2 && this.cards[0].getCardValue()[0] === this.cards[1].getCardValue()[0]
    }

    getCard(position: number): Card { return this.cards[position] }
    removeLastCard(): void { this.cards.pop() }

}