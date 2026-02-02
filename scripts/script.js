/* Script de identificação visual do menu ativo no momento */
const links = document.querySelectorAll(".header-lista-item");

function ativarLink(link) {
  const url = location.href;
  const url_ativa = link.href;

  if (url.includes(url_ativa)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
/* Script de identificação visual do menu ativo no momento */

/* Script de exibição de seções conforme seleção do usuário na página Orçamento */
const bikcraft = document.getElementById("bikcraft");
const seguro = document.getElementById("seguro");
const blocoBikcraft = document.getElementById("orcamento-bikcraft");
const blocoSeguro = document.getElementById("orcamento-seguro");

function atualizar() {
  blocoBikcraft.style.display = bikcraft.checked ? "block" : "none";
  blocoSeguro.style.display = seguro.checked ? "block" : "none";
}

bikcraft.addEventListener("change", atualizar);
seguro.addEventListener("change", atualizar);
/* Script de exibição de seções conforme seleção do usuário na página Orçamento */

/* Script para elecionar itens na página Orçamento */
const parametros = new URLSearchParams(location.search);

function selecionarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(selecionarProduto);
