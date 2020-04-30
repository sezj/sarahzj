function retractMenu() {
  document.getElementById("menu-btn").checked = false;
}
window.onload = function() {
  document.getElementById("main-content").addEventListener('click', retractMenu);
}
