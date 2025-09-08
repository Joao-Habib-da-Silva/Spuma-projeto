const select_mode = window.document.getElementById("modo-dark-and-light");
const select_mode_bolinha = window.document.getElementById("bolinha");
const html = window.document.documentElement;
const header = document.getElementById("header");
const menu_for_phones = document.getElementById("menu-for-phones");
select_mode.addEventListener("click", function () {
    select_mode_bolinha.classList.toggle("ativado");
    html.classList.toggle("ativado");
    if (html.classList.contains("ativado")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    header.classList.add("start");
    menu_for_phones.classList.add("start");
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      bolinha.classList.remove("ativado");
      html.classList.remove("ativado");
    } else {
      bolinha.classList.add("ativado");
      html.classList.add("ativado");
    }
  });
