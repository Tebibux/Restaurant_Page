const footer = () => {
	const gitLink = 'https://github.com/Tebibux/Restaurant_Page'
	const foot = document.createElement('div');
	foot.className = 'footer';
	foot.innerHTML = `TOP - <a href="http://github.com/Tebibux/calculator" target="_blank"><i
	class="fab fa-github" aria-hidden="true"></i>Tebibux</a>`;
	return foot;
}

export default footer;