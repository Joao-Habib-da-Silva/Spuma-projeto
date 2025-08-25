

window.document
  .getElementById("modo-dark-and-light")
  .addEventListener("click", function () {
    window.document.getElementById("bolinha").classList.toggle("ativado");
    const html = window.document.documentElement;
    html.classList.toggle("ativado");
    if (html.classList.contains("ativado")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const menu = document.getElementById("menu-for-phones");
    const bolinha = document.getElementById("bolinha");
    const html = document.documentElement;

    header.classList.add("start");
    menu.classList.add("start");

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      bolinha.classList.remove("ativado");
      html.classList.remove("ativado");
    } else {
      bolinha.classList.add("ativado");
      html.classList.add("ativado");
    }
  });
