var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	createDeleteButton(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}

	if (event.target.tagName === "BUTTON") {
		var li = event.target.parentElement;
		ul.removeChild(li);
	}
})

function createDeleteButton(li) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.classList.add("delete");
	li.appendChild(deleteButton);
}

var liItems = document.querySelectorAll("li");
liItems.forEach(function(li) {
	createDeleteButton(li);
})

