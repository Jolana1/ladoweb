const item =
	document.querySelector("div");

function changeColor() {
	item.classList.toggle("pink");
}
item.onclick = changeColor;
