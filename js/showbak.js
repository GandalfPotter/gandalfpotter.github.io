function showBak(){
	filetxt = getFileTxt();
	files = filetxt.split("\n");
	for(var i in files){
		createLink(i, "/backups/"+i);
	}
}

async function getFileTxt(){
	const response = await fetch("/backups/FILES.txt");
	const filetxt = await response.text();
	return filetxt;
}

function createLink(name, addr){
	var a = document.createElement('a');

	var link = document.createTextNode(name);
	a.appendChild(link);
	a.title = name;
	a.href = addr;

	a.appendChild(document.createElement("br"));

	document.body.appendChild(a);
}
