export class Product{
    constructor(arr){[this.id, this.text] = arr}
    Drow_Card(){
        return `<div class="card">
                    <div class="card_info"><p>${this.text}</p></div>
                    <div class="switch_btns_wrapper"></div>
                </div>`;
    }
    Drow_Base_Btns(){
        return `<button id="delete">
                    <img src="/source/img/галочка.svg" alt="">
                </button>`;
    }
    Drow_Highlight_Btns(){
        return `<button id="highlight">
                    <div>
                        <img style="display: none;" src="/source/img/галочка.svg" alt="">
                    </div>
                </button>`;
    }
    Drow_Header_Btns(highlight_click){
        if(highlight_click){
            return `<button id="header_after_click_left_btn">Удалить</button>
                    <button id="header_after_click_right_btn">Отмена</button>`;
        } else{
            return `<button id="header_left_btn">Добавить</button>
                    <button id="header_right_btn">Выделить</button>`;
        }
    }
}