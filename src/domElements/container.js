export default class Link {
	constructor(type, className, inText) {
		this.type = type;
		this.className = className;
		this.inText = inText;
	}
	elementDom = () => {
		const elm = document.createElement(`${this.type}`);
		elm.className = `${this.className}`;
		elm.reference = `${this.reference}`;
		elm.innerText = `${this.inText}`;
		return elm
	}

}
