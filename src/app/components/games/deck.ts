import Card from "./blackjack/card";

export default class Deck {

  family = ["S", "H", "D", "C"]
  value = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]
  cards : Card[] = []

  constructor(){
    this.createcards()
    this.shuffle();
  }

  private createcards(){
    this.family.forEach( f => {
      this.value.forEach ( v => {
        this.cards.push(new Card(v,f))
      })
    })
  }

  private shuffle (){ 
    for (let i = this.cards.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
    }
  };

  getCards(): Card[]{
    return this.cards
  }

  isEmpty(): boolean{
    return this.cards.length<1
  }

}