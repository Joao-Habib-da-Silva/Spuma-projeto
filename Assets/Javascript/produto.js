import { arquivo_json } from "./conteudo";
let n = 0;
var input = window.document.getElementById("input");
const roleta = window.document.getElementById("roleta");
var seta_esquerda = window.document.getElementById("seta-esquerda");
var seta_direita = window.document.getElementById("seta-direita");
console.log(window.innerWidth)
input.addEventListener("input", function () {
  const products = document.querySelectorAll(".products"); 
  if (input.value != "") {
    products.forEach((product) => {
      if (product.id.toLowerCase().includes(input.value.toLowerCase())) {
        product.style.display = "block";
        roleta.style.transform = `translateX(0px)`;
      } else {
        product.style.display = "none";
      }
    });
  } else {
    seta_esquerda.style.display = "block";
    seta_direita.style.display = "block";
    products.forEach((product) => {
      product.style.display = "block";
    });
  }
});

var seletor = window.document.getElementById("seletor-de-marcas");
seletor.addEventListener("change", function () {
  const products = document.querySelectorAll(".products");
  if(seletor.value == "todos") {
    products.forEach((product) => {
      product.style.display = "block"
    })
  }
  else {
  products.forEach((product) => {
    if (
      (input.value.toLowerCase() == "" &&
        product.id.toLowerCase().includes(seletor.value.toLowerCase())) ||
      (input.value.toLowerCase() != "" &&
        product.id.toLowerCase().includes(seletor.value.toLowerCase()) &&
        product.id.toLowerCase().includes(input.value.toLowerCase()))
    ) {
      product.style.display = "block";
      roleta.style.transform = `translateX(0px)`;
    } else {
      product.style.display = "none";
    }
  });}
});

seta_direita.addEventListener("click", function () {
  n += 1;
  let roletorgrau = 82.5
  if(window.innerWidth > 1600) {
    roletorgrau= 66
  }
  if (n > 0) {
    seta_esquerda.classList.add("opacidade");
    roleta.style.transform = `translateX(${n * -roletorgrau}rem)`;
  } else {
    roleta.style.transform += `translateX(0px)`;
    seta_direita.classList.add("desabilitado");
  }
  console.log(n);
});

seta_esquerda.addEventListener("click", function () {
  n -= 1;
  if (n < 0) {
    n = 0;
  }
  if (n < 1) {
    seta_esquerda.classList.remove("opacidade");
    roleta.style.transform = `translateX(0px)`;
  } else {
    if (n == 4) {
      seta_direita.classList.remove("desabilitado");
    }
    roleta.style.transform = `translateX(${n * -82.5}rem)`;
  }
  console.log(n);
});
arquivo_json.forEach((produto) => {
  const divs = window.document.createElement("div");
  divs.classList.add("products");
  divs.id =
    produto["nome"].toLowerCase() +
    " " +
    produto["tipo"].toLowerCase() +
    " " +
    produto["marca"].toLowerCase();
  divs.innerHTML = ` <div class="produtos-cima" >
    <h1>${produto["nome"]}</h1>
    </div>
    <div class="produtos-meio">
    <div class="imagem-area"><img src="${produto.imagem}"></div>
    <p class="descricao">
    ${produto["descricao"]}</p>
    </div>
    <div class="produtos-comeco">
        <div class="produtos-comeco-esquerdo">
            <button id="botao">+ </button>
            <button>- </button>
    </div>
        <div class="produtos-comeco-direito">
            <button>Quero</button>
        </div>
    </div>
    </div>
    `;
  roleta.appendChild(divs);
});
  