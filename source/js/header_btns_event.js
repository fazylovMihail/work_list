import { Product } from "./class.js";

export function add(wrapper, card_arr){
    let new_id = '0000001';
    const new_text = prompt('Напиши сюда задачу, к-я появиться в карточке:');

    if(card_arr.length > 0){
        new_id = (parseInt(card_arr[card_arr.length-1].id, 10) + 1).toString().padStart(new_id.length, '0');
    } console.log(new_id);
    const new_card = new Product([new_id, new_text]); card_arr.push(new_card); console.log(card_arr);
    wrapper.innerHTML += new_card.Drow_Card();

    const btns_wrappers = wrapper.querySelectorAll('.switch_btns_wrapper'), new_btn_wrapper = btns_wrappers[btns_wrappers.length-1];
    new_btn_wrapper.innerHTML += new_card.Drow_Base_Btns();
}
export function highlight(click, card_arr){
    const cards = document.querySelectorAll('.card');
    if(cards.length > 1){
        cards.forEach((card, index) => {
            const switch_btns_wrapper = card.querySelector('.switch_btns_wrapper'); switch_btns_wrapper.innerHTML = null;
            if(click){
                switch_btns_wrapper.innerHTML += card_arr[index].Drow_Base_Btns();
            } else{
                switch_btns_wrapper.innerHTML += card_arr[index].Drow_Highlight_Btns();
            }
        });
        click = !click;
    } else alert('Карточек должно быть больше 1, чтобы применить выделение');

    return click
}