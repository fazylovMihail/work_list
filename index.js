import { add, highlight } from "./source/js/header_btns_event.js";

let click = false;
const wrapper = document.querySelector('.product_wrapper'), header_btns = document.querySelectorAll('.header_btn_wrapper button'),
card_arr = [], [left_btn, right_btn] = header_btns;

left_btn.addEventListener('click', () => add(wrapper, card_arr));
right_btn.addEventListener('click', () => click = highlight(click, card_arr));