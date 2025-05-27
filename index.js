import { sign_in, sign_up } from "./source/js/login.js";

const params = new URLSearchParams(window.location.search), value = params.get('login');
const form = document.getElementById('login_form'), inputs = form.querySelectorAll('.work_input'),
strings = ['Зарегистрироваться', 'Войти'];

if(value){
    console.log(true);
    sign_in(form, inputs, strings);
} else{
    sign_up(form, inputs, strings);
}