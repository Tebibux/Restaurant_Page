import Link from "./container";


// receives 
//	image source 
//	title
// 	description --> returns DOM that contains img, title, and description.
class AboutContent {
	constructor(imgSource = undefined, title, description) {
		this.imgSource = imgSource;
		this.title = title;
		this.description = description;
	}
	about() {
		// creates food content div
		const aboutBox = new Link('div', 'about-content', '');
		const about = aboutBox.elementDom();

		// image box create
		const imgBox = new Link('img', 'about-image', '');
		const image = imgBox.elementDom();
		// giving the element the source to map the image source
		image.src = `${this.imgSource}`;
		// appending the image to the food-content DOM
		about.appendChild(image);


		// creating description box
		const discBox = new Link('div', 'about-description', '');
		const disc = discBox.elementDom();

		// creating the food title box
		const titleDisc = new Link('div', 'about-description-title', `${this.title}`);
		const titleD = titleDisc.elementDom();
		disc.appendChild(titleD);

		// creating the food description box with description
		const detailDisc = new Link('div', 'about-description-body', `${this.description}`);
		const detailD = detailDisc.elementDom();
		disc.appendChild(detailD);


		// appending description box to the food-content DOM
		about.appendChild(disc);

		return about;
	}
}
export default AboutContent;