import fun from "./fun"

const message = fun();
const mess = document.querySelector('.content');
const i = document.createElement('h1');
mess.innerText = message;