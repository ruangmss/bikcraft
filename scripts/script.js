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

/* Script para selecionar itens na página Orçamento */
const parametros = new URLSearchParams(location.search);

function selecionarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(selecionarProduto);
/* Script para selecionar itens na página Orçamento */

/* Script de exibição de perguntas na página Seguros */
const perguntas = document.querySelectorAll(".perguntas-frequentes button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function exibirPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(exibirPergunta);
/* Script de exibição de perguntas na página Seguros */
