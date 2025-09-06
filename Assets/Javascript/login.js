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