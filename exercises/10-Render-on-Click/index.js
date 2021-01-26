let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem2 = document.createElement("P");
	elem2.innerHTML = "Hello World";
	elem2.style.background = "yellow";
	document.body.appendChild(elem2);
});
