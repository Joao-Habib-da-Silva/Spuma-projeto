var n =0
window.document.getElementById("seta-direita").addEventListener("click", function() {
    n +=1
    if (n > 0) {
        window.document.getElementById("seta-esquerda").classList.add("opacidade")
    }
})
