export default class Link {
	constructor(type, className = undefined, inText=undefined) {
		this.type = type;
		this.className = className;
		this.inText = inText;
	}
	elementDom = () => {
		const elm = document.createElement(`${this.type}`);
		elm.className = `${this.className}`;
		elm.innerText = `${this.inText}`;
		return elm
	}

}
