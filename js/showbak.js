async function showBak(){
	const response = await fetch("./backups/FILES.txt");
	const filetxt = await response.text();

	console.log(filetxt);

	files = filetxt.toString().split("\n");
	for(var i in files){
		createLink(files[i], "./backups/"+files[i]);
	}
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
