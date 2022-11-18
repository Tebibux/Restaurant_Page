import './styles/style.css'
import { header, headerTwo } from './domElements/headerOne';
import Link from './domElements/container'
import footer from './domElements/foot'

// loading the container
const container = document.querySelector('.container');
// appending the header
const head1 = header();
// adding header to the container
container.appendChild(head1);
// _____________-- navigation edit -- _________________
// as no navigation bar in the index page null div as place holder
// 		to maintain the css position
const nav = document.createElement('div');
// adding the navigation to the container
container.appendChild(nav);
// _____________-- body content edit --_________________
// body link page
const contactDom = new Link('div', 'contact', '')
const contact = contactDom.elementDom();

// links -- body of the index page
// link -- the first(menu) page
const menuDom = new Link('a', 'link', 'Menu');
const menu = menuDom.elementDom();
menu.href = "./Menu.html";
contact.appendChild(menu);

// links -- body of the index page
// link -- the second(about) page
const aboutDom = new Link('a', 'link', 'About');
const about = aboutDom.elementDom();
about.href = "./About.html";
contact.appendChild(about);

// links -- body of the index page
// link -- the third(contact) page
const contactsDom = new Link('a', 'link', 'Contact');
const contacts = contactsDom.elementDom();
contacts.href = "./Contact.html";
contact.appendChild(contacts);
// adding the body to the container
container.appendChild(contact);


// _____________-- body content edit --_________________
// adding the DOM footer to the page

const foot = footer();
container.appendChild(foot);

console.log('this console is from the index.js')
console.log(container)
