// import './styles/style.css'
import { header, headerTwo } from '../domElements/headerOne';
import Link from '../domElements/container';
import footer from '../domElements/foot';
import  navigation from '../domElements/nav';
import FoodContent from '../domElements/foodContent';

// loading the container
const container = document.querySelector('.container');
// appending the header
const Menu = () => {
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
	const mainMenu = new Link('div', 'main', '');
	const main = mainMenu.elementDom();

	// creating the menu items 1
	const food_One_ = new FoodContent('', 'Special Ful', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
	dolorem commodi nostrum optio quam neque libero. Dolorum vel unde magnam earum exercitationem
	voluptatibus, dignissimos, voluptatem iusto in expedita, velit blanditiis.`);
	const foodOne = food_One_.food();
	main.appendChild(foodOne)


	// creating the menu items 2
	const food_Two_ = new FoodContent('', 'Special Ful', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
	dolorem commodi nostrum optio quam neque libero. Dolorum vel unde magnam earum exercitationem
	voluptatibus, dignissimos, voluptatem iusto in expedita, velit blanditiis.`);
	const foodTwo = food_Two_.food();
	main.appendChild(foodTwo);



	// creating the menu items 3
	const food_Three_ = new FoodContent('', 'Special Ful', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
	dolorem commodi nostrum optio quam neque libero. Dolorum vel unde magnam earum exercitationem
	voluptatibus, dignissimos, voluptatem iusto in expedita, velit blanditiis.`);
	const foodThree = food_Three_.food();
	main.appendChild(foodThree)
	// appending the element
	container.appendChild(main);
	// _____________-- body menu edit --_________________
	// adding the DOM footer to the page

	const foot = footer();
	container.appendChild(foot);

	return container;
}

export default Menu;