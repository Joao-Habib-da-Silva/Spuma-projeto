window.document.getElementById("abrir-fechar").addEventListener("click", function() {
    if(window.document.getElementById("abrir-fechar").classList.contains("bx-show")) {
        window.document.getElementById("abrir-fechar").classList.remove("bx-show")
        window.document.getElementById("abrir-fechar").classList.add("bx-hide")
        window.document.getElementById("senhas").type ="password"
    }
    else {
        window.document.getElementById("abrir-fechar").classList.remove("bx-hide")
        window.document.getElementById("abrir-fechar").classList.add("bx-show")
        window.document.getElementById("senhas").type = "text"
    }
})
window.document.getElementById("modo-dark-and-light").addEventListener("click", function() {
    window.document.getElementById("bolinha").classList.toggle("ativado")
    window.document.documentElement.classList.toggle("ativado")
    if(window.document.documentElement.classList.contains("ativado")) {
        localStorage.setItem("theme", "light")
    }
    else {
        localStorage.setItem("theme", "dark")
    }
})
window.document.addEventListener("DOMContentLoaded", function() {
    const theme = localStorage.getItem("theme")

    if (theme == "dark") {
        window.document.getElementById("bolinha").classList.remove("ativado")
        window.document.documentElement.classList.remove("ativado")
    }
    else {
        window.document.getElementById("bolinha").classList.add("ativado")
        window.document.documentElement.classList.add("ativado")
    }
})