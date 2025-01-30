import Card from "./card";

export default class Hand{
    private cards : Card[] = []

    private getTotal() : number[]{
        let total = [0]
        // run cards
        this.cards.forEach(c=> {
            //check if 1 and 11 for aces
            let temp :number[] = []
            if(c.getPoints().length>1){
                temp = total.map(t=> c.getPoints()[1]+t)
            }
            
            // run totals
            total = total.map(t => c.getPoints()[0] + t)
            total.push(...temp)
        })
        // order values and remove duplicate values
        total.sort((a,b)=> a-b)
        total = total.filter((item,index) => total.indexOf(item) === index);
        return total
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
        }
    }

    getPoints() : number[] {
        let total : number[]= this.getTotal()
        if(total.includes(21)) return [21]
        let min = Math.min(...total)
        if (min > 21){
            return [min]
        }
        return total.filter(t => t < 22)
    }

}