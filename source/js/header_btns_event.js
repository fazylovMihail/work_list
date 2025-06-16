import { Product } from "./class.js";

let product_arr = [], highlight_arr = [];;

export function add(wrapper){
    const text = prompt('Напиши сюда то, что будет в карточке:'); if(!text || text.length > 30) return;
    const product = new Product(text); product_arr.push(product); wrapper.appendChild(product.Drow_Card());

    const switch_btns_wrappers = wrapper.querySelectorAll('.switch_btns_wrapper'), switch_btns_wrapper = switch_btns_wrappers[switch_btns_wrappers.length-1];
    click_manager(switch_btns_wrapper, wrapper, true, product_arr.length-1);
}
export function highlight(wrapper, click, header_btns){
    if(product_arr.length < 2 && !click){alert('Карточек должно быть больше одной, чтобы применить выделение :)'); return}

    for(let i=0;i<product_arr.length;i++){
        const card = product_arr[i].card; console.log(card);
        const switch_btns_wrapper = card.querySelector('.switch_btns_wrapper');

        click_manager(switch_btns_wrapper, wrapper, click, i);
    }
    header_btns_manager(header_btns, click, wrapper);

    return click = !click;
}

function click_manager(switch_btns_wrapper, wrapper, click, index, header_btns){
    if(click){
        switch_btns_wrapper.innerHTML = product_arr[index].Drow_Base_Btns();
        const delete_btn = wrapper.querySelectorAll('.delete')[index];
        delete_btn.onclick = () => {
            wrapper.removeChild(delete_btn.parentNode.parentNode);
            product_arr.splice(product_arr[index], 1); console.log(product_arr);
        }
        highlight_arr = [];        
    } else{
        switch_btns_wrapper.innerHTML = product_arr[index].Drow_Highlight_Btns();
        const highlight_btn = switch_btns_wrapper.querySelector('.highlight'); highlight_btn.onclick = () => product_arr[index].highlight_click = highlight_click_manager(highlight_btn, product_arr[index].highlight_click);
    }
}
function highlight_click_manager(btn, highlight_click){
    const img = btn.querySelector('img');
    if(highlight_click){
        img.style.display = 'none';
        highlight_arr.splice(btn.parentNode.parentNode, 1);
    } else{
        img.style.display = 'block';
        highlight_arr.push(btn.parentNode.parentNode);
    }
    console.log(highlight_arr);

    return highlight_click = !highlight_click;
}
function delete_highlight_btns(wrapper){
    highlight_arr.forEach(highlight_card => wrapper.removeChild(highlight_card));
    const cards = []; product_arr.forEach(product => {cards.push(product.card)});
    if(cards.length < 1) return;
    
    product_arr = cards.filter(item => !highlight_arr.includes(item));
    highlight_arr = []; console.log(product_arr, highlight_arr);
}
function header_btns_manager(header_btns, click, wrapper){
    console.log(click);
    const [left_btn, right_btn] = header_btns;
    if(click){
        left_btn.innerHTML = 'Добавить'; right_btn.innerHTML = 'Выделить';
        left_btn.onclick = () => add(wrapper);
    } else{
        left_btn.innerHTML = 'Удалить'; right_btn.innerHTML = 'Отмена';
        left_btn.onclick = () => delete_highlight_btns(wrapper);
    }
}