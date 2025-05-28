import { delete_cookie } from "./cookie.js";

document.getElementById('sign_out_btn').addEventListener('click', () => {
    delete_cookie('login');
    window.location.href = '../../index.html';
});