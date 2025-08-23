

window.document
  .getElementById("modo-dark-and-light")
  .addEventListener("click", function () {
    window.document.getElementById("bolinha").classList.toggle("ativado");
    var html = window.document.documentElement;
    html.classList.toggle("ativado");
    if (html.classList.contains("ativado")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
window.onload = function () {
  window.document.getElementById("header").classList.add("start");
  var save = localStorage.getItem("theme")
  var html = window.document.documentElement
  if (save == "dark") {
      window.document.getElementById("bolinha").classList.remove("ativado")    
      html.classList.remove("ativado")
  }
  else {
    window.document.getElementById("bolinha").classList.add("ativado")
    html.classList.add("ativado")
  }
};
