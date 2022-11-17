export default elements = () => {
	// navigation tab
	const nav = document.createElement('div');
	nav.className = 'contact';
	// links
	// home link
	const menu = document.createElement('a');
	menu.href = './Menu.html'
	menu.innerText = 'Menu';

	const about = document.createElement('a');
	about.href = './About.html'
	about.innerText = 'About';

	const contact = document.createElement('a');
	contact.href = './Contact.html'
	contact.innerText = 'Contact';
}
