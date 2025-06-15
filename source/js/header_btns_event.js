import { Product } from "./class.js";

const product_arr = [], highlight_arr = [];

export function add(wrapper){
    const text = prompt('Напиши сюда то, что будет в карточке:'); if(!text || text.length > 30) return;
    const product = new Product(text); product_arr.push(product); wrapper.appendChild(product.Drow_Card());

    const switch_btns_wrappers = wrapper.querySelectorAll('.switch_btns_wrapper'), switch_btns_wrapper = switch_btns_wrappers[switch_btns_wrappers.length-1];
    click_manager(switch_btns_wrapper, wrapper, true, product_arr.length-1);
}
export function highlight(wrapper, click){
    if(product_arr.length < 2){alert('Карточек должно быть больше одной, чтобы применить выделение :)'); return}

    for(let i=0;i<product_arr.length;i++){
        const card = product_arr[i].card; console.log(card);
        const switch_btns_wrapper = card.querySelector('.switch_btns_wrapper');

        click_manager(switch_btns_wrapper, wrapper, click, i);
    }
    return click = !click;
}

function click_manager(switch_btns_wrapper, wrapper, click, index){
    if(click){
        switch_btns_wrapper.innerHTML = product_arr[index].Drow_Base_Btns();
        const delete_btn = wrapper.querySelectorAll('.delete')[index];
        delete_btn.onclick = () => {
            wrapper.removeChild(delete_btn.parentNode.parentNode);
            product_arr.splice(product_arr[index], 1); console.log(product_arr);
        }        
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