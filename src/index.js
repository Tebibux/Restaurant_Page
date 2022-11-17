import {cont} from './domElements/container';
import header, {headerTwo} from './domElements/headerOne';

const container = document.querySelector('.container');
const elm = cont();
console.log(container)
console.log(elm)
container.appendChild(elm);
