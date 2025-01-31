import Card from "./card";

export default class Hand{
    
    private cards: Card[] = []
    
    private busted: boolean = false
    isBusted() { return this.busted }
    
    private blackjack: boolean = false
    isBlackjack() { return this.blackjack }

    private points : number[] = [0]
    getPoints() { return this.points }

    getMaxPlayableValue(): number{
        return Math.max(...this.points)
    }

    isBelow17(): boolean {
        return this.getMaxPlayableValue()<17
    }

    getCardImages(): string[]{
        return this.cards.map(c => c.getImage())
    }

    clearCards(): void{
        this.cards =[]
    }

    draw(cards: Card[]): void {
        let card = cards.shift()
        if (card != undefined) {
            this.cards.push(card)
            this.setPoints()
        }
    }

    private setPoints() : void {
        this.getTotal()
        //if blackjack
        if(this.points.includes(21)) {
            this.blackjack = true
            this.points = [21]
            return
        }
        //if busted
        let min = Math.min(...this.points)
        if (min > 21){
            this.busted = true
            this.points = [min]
            return
        }
        // remove busted value
        this.points = this.points.filter(t => t < 22)
    }

    private getTotal() : void{

        // add last card to points
        let lastCard = this.cards[this.cards.length - 1]
        //check if 1 and 11 for aces
        let temp: number[] = []
        if (lastCard.getCardValue().length > 1) {
            // add value 11 to total
            temp = this.points.map(t => lastCard.getCardValue()[1] + t)
        }

        // add last card first value to total points
        this.points = this.points.map(t => lastCard.getCardValue()[0] + t)
        this.points.push(...temp)

        // order values and remove duplicate values (double aces)
        this.points.sort((a, b) => a - b)
        this.points = this.points.filter((item, index) => this.points.indexOf(item) === index);
    }

    getHighestPlayablePoint(): number {
        return this.points[this.points.length-1];
    }

}