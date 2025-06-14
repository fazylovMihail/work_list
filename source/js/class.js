export class Product{
    constructor(text){this.text = text}
    Drow_Card(){
        return `<div class="card">
                    <div class="card_info"><p>${this.text}</p></div>
                    <div class="switch_btns_wrapper"></div>
                </div>`;
    }
    Drow_Base_Btns(){
        return `<button class="delete">
                    <img src="/source/img/галочка.svg" alt="">
                </button>`;
    }
}