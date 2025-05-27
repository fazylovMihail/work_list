import { get_cookie, set_cookie } from "./cookie.js";

export function sign_up(form, inputs, strings){
    get_tags(form, strings, true);
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const values = [];
        inputs.forEach(el => {values.push(el.value); el.value = null});

        set_cookie('login', values);
        console.log(get_cookie('login'));
    });
}
export function sign_in(form, inputs, strings){
    const strings_local = strings.reverse();
    get_tags(form, strings);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const values = [], cookie = get_cookie('login').split(','); 
        inputs.forEach(el => {values.push(el.value); el.value = null});

        console.log(get_cookie('login'));
        if(values === cookie) return true; else false;
    });
}
function get_tags(parent, strings, sign=false){
    const a = parent.querySelector('a'), arr = [parent.querySelector('h1'), a];
    arr.forEach((el, i) => {el.innerHTML = strings[i]});

    sign? a.href = 'index.html?login=true': a.href = 'index.html';
}