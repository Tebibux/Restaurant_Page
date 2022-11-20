// import './styles/style.css'
import { header, headerTwo } from '../domElements/headerOne';
import Link from '../domElements/container';
import footer from '../domElements/foot';
import  navigation from '../domElements/nav';
import FoodContent from '../domElements/foodContent';
import img1 from '../asset/image/food_1.png';
import img2 from '../asset/image/food_2.png';
import img3 from '../asset/image/food_3.png';
import img4 from '../asset/image/food_4.png';
import img5 from '../asset/image/food_5.png';

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
	const imgOne = new Image();
	imgOne.src = img1;
	const food_One_ = new FoodContent(`${imgOne.src}`, 'Doro Wot', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus.`);
	const foodOne = food_One_.food();
	main.appendChild(foodOne)


	// creating the menu items 2
	const imgTwo = new Image();
	imgTwo.src = img2;
	const food_Two_ = new FoodContent(`${imgTwo.src}`, 'Beye Aynetu', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus.`);
	const foodTwo = food_Two_.food();
	main.appendChild(foodTwo);



	// creating the menu items 3
	const imgThree = new Image();
	imgThree.src = img3;
	const food_Three_ = new FoodContent(`${imgThree.src}`, 'Bini Special', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus.`);
	const foodThree = food_Three_.food();

	main.appendChild(foodThree)

	// creating the menu items 4
	const imgFour = new Image();
	imgFour.src = img4;
	const food_Four_ = new FoodContent(`${ imgFour.src}`, 'Beyaynet Special', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus.`);
	const foodFour = food_Four_.food();


	main.appendChild(foodFour)	

	// creating the menu items 5
	const imgFive = new Image();
	imgFive.src = img5;
	const food_five_ = new FoodContent(`${imgFive.src}`, 'Kitifo Special', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus.`);
	const foodFive = food_five_.food();


	main.appendChild(foodFive)	

	// appending the element
	container.appendChild(main);
	// _____________-- body menu edit --_________________
	// adding the DOM footer to the page

	const foot = footer();
	container.appendChild(foot);

	return container;
}

export default Menu;