async function showBak(){
	fetch("./backups/FILES.txt").then((response) => {
		const txtPromise = response.text();

		txtPromise.then((data) => {
			files = response.text().toString().split("\n");
			for(var i in files){
				createLink(files[i], "./backups/"+files[i]);
			}
		});
	});
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
