export class Product{
    constructor(text, highlight_click=false){
        this.text = text
        this.highlight_click = highlight_click;
    }
    Drow_Card(){
        const card_el = document.createElement('div'); card_el.className = 'card';
        card_el.innerHTML = `<div class="card_info"><p>${this.text}</p></div>
                            <div class="switch_btns_wrapper"></div>`; console.log(card_el);
        this.card = card_el;
        return card_el;
    }
    Drow_Base_Btns(){
        return `<button class="delete">
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
}