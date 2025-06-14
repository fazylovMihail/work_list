import { add } from "./source/js/header_btns_event.js";

const wrapper = document.querySelector('.product_wrapper'), [left_btn, right_btn] = document.querySelectorAll('.header_btn_wrapper button');
left_btn.onclick = () => add(wrapper);