var home_text = window.document.getElementById("home-text");
window.onload = function() {
    home_text.classList.add("start");
    window.document.getElementById("header").classList.add("start");
    window.document.getElementById("menu-for-phones").classList.add("start");


}

window.document.getElementById("modo-dark-and-light").addEventListener("click", function() {
  window.document.getElementById("bolinha").classList.toggle("ativado")
})