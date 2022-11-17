// as node has it own container name
// naming the container 'container' many cause 
// naming conflict
// cont == container
function cont(){
	const contnr = document.createElement('div');
	contnr.className = 'container';
	contnr.innerText = 'hi'
	return contnr
}
export {cont};