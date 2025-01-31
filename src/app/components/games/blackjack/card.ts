export default class Card{

    private value : string = ""
    private familly : string = ""

    constructor(value:string, familly:string){
        this.value = value
        this.familly = familly
    }
    
    getCardValue(): number[]{
        if(this.value == "A"){
            return [1, 11]
        } else if (["T", "J", "Q", "K"].includes(this.value)) {
            return [10];
        }
        return [Number.parseInt(this.value)]
    }

    getImage():string{
        return this.value+this.familly
    }
}