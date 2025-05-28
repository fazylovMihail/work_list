import { sign_up, get_tags } from "./source/js/login.js";
import { get_cookie } from "./source/js/cookie.js";

const form = document.getElementById('login_form'), inputs = form.querySelectorAll('.work_input'),
cookie = get_cookie('login'), strings = ['Зарегистрироваться', 'Войти'];

if(!cookie){
    get_tags(form, strings, true);
    sign_up(form, inputs);
} else{
    window.location.href = './source/windows/main.html';
}