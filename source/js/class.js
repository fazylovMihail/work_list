export class Product{
    constructor(arr){[this.id, this.text] = arr}
    Drow_Card(){
        return `<div class="card">
                    <div class="card_info"><p>${this.text}</p></div>
                    <div class="switch_btns_wrapper"></div>
                </div>`;
    }
    Drow_Base_Btns(){
        return `<button id="">
                    <img src="/source/img/галочка.svg" alt="">
                </button>`;
    }
    Drow_Highlight_Btns(){
        return `<button>
                    <div>
                        <img style="display: none;" src="/source/img/галочка.svg" alt="">
                    </div>
                </button>`;
    }
}