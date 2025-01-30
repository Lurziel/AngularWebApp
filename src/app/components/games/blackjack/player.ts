import Card from "./card"

abstract class Player{
    private cards :Card[]= []

    getImages(): string[]{
        return this.cards.map(c => c.getImage())
    }
    
    clearCards(): void{
        this.cards =[]
    }

    getTotal() : number[]{
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
        return total
    }
    
    draw(cards :Card[]): void{
        let card = cards.shift()
        if(card != undefined){
            this.cards.push(card)
        }
    }

}

class Bank extends Player{}

class Gambler extends Player{
    tokens :number = 500
}

export {Bank, Gambler, Player}