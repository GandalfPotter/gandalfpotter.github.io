function createLink(name, addr){
	var a = document.createElement('a');

	var link = document.createTextNode(name);
	a.appendChild(link);
	a.title = name;
	a.href = addr;

	a.appendChild(document.createElement("br"));

	document.body.appendChild(a);
}
