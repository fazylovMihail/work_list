import { Product } from "./class.js";

export function add(wrapper){
    const text = prompt('Напиши сюда то, что будет в карточке:'); if(!text || text.length > 30) return;
    const product = new Product(text); wrapper.innerHTML += product.Drow_Card();

    const switch_btns_wrappers = wrapper.querySelectorAll('.switch_btns_wrapper'), switch_btns_wrapper = switch_btns_wrappers[switch_btns_wrappers.length-1];
    switch_btns_wrapper.innerHTML = product.Drow_Base_Btns();

    const delete_btns = wrapper.querySelectorAll('.delete'); delete_btns.forEach(delete_btn => delete_btn.onclick = () => wrapper.removeChild(delete_btn.parentNode.parentNode));
}