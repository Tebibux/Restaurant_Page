 import Link from "./container";
 const navigation = () => {
	// navigation tab
	// const nav = new Link('div', '', '');
	const nav = document.createElement('nav');
	// links
	// home link
	const menu = document.createElement('a');
	menu.className = 'list';
	menu.href = './Menu.html'
	menu.innerHTML = '<div>Menu</div>';

	const about = document.createElement('a');
	about.className = 'list';
	about.href = './About.html'
	about.innerHTML = '<div>About</div>';

	const contact = document.createElement('a');
	contact.className = 'list';
	contact.href = './Contact.html'
	contact.innerHTML = '<div>Contact</div>';

	// appending links
	nav.appendChild(menu);
	nav.appendChild(about);
	nav.appendChild(contact);
	return nav;
}

export default navigation;