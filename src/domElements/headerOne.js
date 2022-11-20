// header of the index
const header = () => {
	const head = document.createElement('div');
	head.className = 'header';
	head.innerText = 'Ethiopian about';
	return head;
}

const headerTwo = () => {
	const head = document.createElement('div');
	head.className = 'header';
	head.innerText = 'Biniam Fast Food Menu';
	return head;
}
export { headerTwo, header }