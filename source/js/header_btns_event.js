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

    const cards = wrapper.querySelectorAll('.card');
    cards.forEach(card => {
        const delete_btn = card.querySelector('#delete');
        delete_btn.addEventListener('click', () => delete_card_btn_manager(card_arr, new_card, card));
    });
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
                highlight_button_manager(cards[index]);
            }
        });
        click = !click;
    } else alert('Карточек должно быть больше 1, чтобы применить выделение');

    return click
}

function delete_card_btn_manager(card_arr, obj_card, card){
    card.parentNode.removeChild(card);
    card_arr.splice(card_arr.indexOf(obj_card), 1);
}
function highlight_button_manager(card, click=false){
    const work_btn = card.querySelector('#highlight'), highlight_arr = []; console.log(work_btn);
    work_btn.addEventListener('click', () => {
        if(click){
            const index = highlight_arr.indexOf(card);
            highlight_arr.splice(index, 1);
            work_btn.querySelector('img').style.display = 'none';
        }
        else{
            highlight_arr.push(card);
            work_btn.querySelector('img').style.display = 'block'
        }

        click = !click;
        return highlight_arr;
    });
}