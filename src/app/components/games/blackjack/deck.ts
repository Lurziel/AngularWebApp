export default class Deck {

  family = ["S", "H", "D", "C"]
  value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  cards : string[] = []

  constructor(){
    this.createcards()
    this.shuffle();
  }

  private createcards(){
    this.family.forEach( f => {
      this.value.forEach ( v => {
        this.cards.push(v+f)
      })
    })
  }

  private shuffle (){ 
    for (let i = this.cards.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
    }
  };

  getCards(): string[]{
    return this.cards
  }

}