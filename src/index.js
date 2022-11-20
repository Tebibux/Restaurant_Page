import './styles/style.css';
import home from './links/home';
import Menu from './links/Menu';
import about from './links/About';
import contact from './links/contact';

const container = document.querySelector('.container')

window.addEventListener("load", () => {
	home();
})

container.addEventListener("click", (e) => {
	if ((e.target.id === 'menuId') || (e.target.id === 'menu')) {
		container.innerHTML = '';
		Menu();
	}
	else if (e.target.id === 'aboutId'|| (e.target.id === 'about')) {
		container.innerHTML = '';
		about(); // aboutId
	}
	else if (e.target.id === 'contactsId'|| (e.target.id === 'contact')) {
		container.innerHTML = '';
		contact(); // contactsId
	}
	else if (e.target.className === 'header') {
		container.innerHTML = '';
		home();
	}
})
