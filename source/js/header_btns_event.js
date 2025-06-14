import { Product } from "./class.js";

const product_arr = [];

export function add(wrapper){
    const text = prompt('Напиши сюда то, что будет в карточке:'); if(!text || text.length > 30) return;
    const product = new Product(text); product_arr.push(product); wrapper.appendChild(product.Drow_Card());

    const switch_btns_wrappers = wrapper.querySelectorAll('.switch_btns_wrapper'), switch_btns_wrapper = switch_btns_wrappers[switch_btns_wrappers.length-1];
    switch_btns_wrapper.innerHTML = product.Drow_Base_Btns();

    const delete_btns = wrapper.querySelectorAll('.delete'); delete_btns.forEach(delete_btn => delete_btn.onclick = () => wrapper.removeChild(delete_btn.parentNode.parentNode));
}
export function highlight(){
    if(product_arr.length < 2){alert('Карточек должно быть больше одной, чтобы применить выделение :)'); return}

    for(let i=0;i<product_arr.length;i++){
        const card = product_arr[i].card; console.log(card);
        const switch_btns_wrapper = card.querySelector('.switch_btns_wrapper'); switch_btns_wrapper.innerHTML = product_arr[i].Drow_Highlight_Btns();

        const highlight_btn = switch_btns_wrapper.querySelector('.highlight'); highlight_btn.onclick = () => product_arr[i].highlight_click = highlight_click_manager(highlight_btn, product_arr[i].highlight_click);
    }
}

function highlight_click_manager(btn, highlight_click){
    const img = btn.querySelector('img');
    highlight_click? img.style.display = 'none': img.style.display = 'block'; highlight_click = !highlight_click;

    return highlight_click;
}