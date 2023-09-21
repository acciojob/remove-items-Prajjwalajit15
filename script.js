//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
 const clr = document.getElementById("colorSelect");
const btn = document.querySelector("form > input");


	btn.addEventListener("click", function() {
	const selectedClr = clr.options[clr.selectedIndex];
	if (selectedClr) {
			clr.removeChild(selectedClr);
	   }
	});
});