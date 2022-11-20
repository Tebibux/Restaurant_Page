// import './styles/style.css'
import { header, headerTwo } from '../domElements/headerOne';
import Link from '../domElements/container';
import footer from '../domElements/foot';
import  navigation from '../domElements/nav';
import AboutContent from '../domElements/aboutContent';


// loading the container
const container = document.querySelector('.container');
// appending the header
const about = () => {
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
	const contactDom = new Link('div', 'contact', '');
	const contact = contactDom.elementDom();

	// create the main body of the menu
	const mainAbout = new Link('div', 'about', '');
	const main = mainAbout.elementDom();

	// creating the about site
	const aboutSite = new AboutContent('', 'Special Ful', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
	dolorem commodi nostrum optio quam neque libero. Dolorum vel unde magnam earum exercitationem
	voluptatibus, dignissimos, voluptatem iusto in expedita, velit blanditiis.`);

	const aboutS = aboutSite.about();
	main.appendChild(aboutS);
	container.appendChild(main)
	// _____________-- body menu edit --_________________
	// adding the DOM footer to the page

	const foot = footer();
	container.appendChild(foot);

	return container;
}

export default about;