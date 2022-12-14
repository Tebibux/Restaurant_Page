// import './styles/style.css'
import { header, headerTwo } from '../domElements/headerOne';
import Link from '../domElements/container';
import footer from '../domElements/foot';
import  navigation from '../domElements/nav';

// loading the container
const container = document.querySelector('.container');
// appending the header
const contact = () => {
	const head2 = headerTwo();
	// adding header to the container
	container.appendChild(head2);
	// _____________-- navigation edit -- _________________
	// as no navigation bar in the index page null div as place holder
	// 		to maintain the css position
	const nav = navigation();
	// adding the navigation to the container
	container.appendChild(nav);
	// _____________-- body content edit --_________________
	// body link page
	const contactDom = new Link('div', 'contact', '')
	const contact = contactDom.elementDom();

	// contact owner name -- body of the index page
	// link -- the first(menu) page
	const ownerName = new Link('div', 'owner_name', 'Bini Fast Foods');
	const name = ownerName.elementDom();
	contact.appendChild(name);

	// contact owner phone number
	// shows the owner phone number
	const ownerPhone = new Link('div', 'owner_phone', '+2519-123-456-789');
	const phone = ownerPhone.elementDom();
	contact.appendChild(phone);

	// links -- body of the index page
	// link -- the third(contact) page
	const ownerEmail = new Link('div', 'owner_email', 'Binifastfoods123@gmail.com');
	const email = ownerEmail.elementDom();
	contact.appendChild(email);
	// adding the body to the container
	container.appendChild(contact);


	// _____________-- body content edit --_________________
	// adding the DOM footer to the page

	const foot = footer();
	container.appendChild(foot);

	return container;
}

export default contact;