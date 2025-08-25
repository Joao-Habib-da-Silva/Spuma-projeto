window.onload = function () {
    window.document.getElementById("header").classList.add("start");
    window.document.getElementById("motor").classList.add("start")
    window.document.getElementById("container-sobre").classList.add("start")
  };
  var elements = window.document.getElementById("plano-escolher")
  window.addEventListener("scroll", function() {
    var scroll_value = elements.getBoundingClientRect().top
    var window_height = window.innerHeight
    if (scroll_value < window_height - 250) {
      elements.classList.add("scroll-ativo")
    }
    else {
      elements.classList.remove("scroll-ativo")
    }

  })