import { get_cookie, set_cookie } from "./cookie.js";

export function sign_up(form, inputs){
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if(avaibility_input_value(inputs) !== inputs.length){alert('Нужно заполнить все поля'); return}

        const values = [];
        inputs.forEach(el => {values.push(el.value); el.value = null});

        set_cookie('login', values);
        window.location.href = './source/windows/main.html';
    });
}
export function get_tags(parent, strings, sign=false){
    const a = parent.querySelector('a'), arr = [parent.querySelector('h1'), a];
    arr.forEach((el, i) => {el.innerHTML = strings[i]});

    sign? a.href = 'index.html?login=true': a.href = 'index.html';
}

function avaibility_input_value(inputs){
    let total = 0;
    inputs.forEach(el => {if(el.value) total++});

    return total;
}