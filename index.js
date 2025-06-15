import { add, highlight } from "./source/js/header_btns_event.js";

let click = false;
const wrapper = document.querySelector('.product_wrapper'), header_btns = document.querySelectorAll('.header_btn_wrapper button'),
[left_btn, right_btn] = header_btns;
left_btn.onclick = () => add(wrapper);
right_btn.onclick = () => click = highlight(wrapper, click, header_btns);