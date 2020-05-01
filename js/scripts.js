function retractMenu(event) {
	event.stopPropagation();
	document.getElementById("menu-btn").checked = false;
}
window.onload = function() {
	var mainContent = document.getElementById("main-content");
	mainContent.addEventListener('click', retractMenu);
	mainContent.addEventListener('touchstart', retractMenu);
}
