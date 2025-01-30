abstract class Player{
    private cards :string[]= []

    getCards(){return this.cards}
    clearCards(){
        this.cards =[]
    }
    
    take(cards :string[]){
        let card = cards.shift()
        if(card != undefined){
            this.cards.push(card)
        }
    }

}

class Bank extends Player{

}

class Gambler extends Player{

    tokens :number = 500

}

export {Bank, Gambler}