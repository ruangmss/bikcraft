/* Script de exibição de seções conforme seleção do usuário na página Orçamento */
const bikcraft = document.getElementById("bikcraft");
const seguro = document.getElementById("seguro");

const blocoBikcraft = document.getElementById("orcamento-bikcraft");
const blocoSeguro = document.getElementById("orcamento-seguro");

function atualizar() {
  if (bikcraft.checked) {
    blocoBikcraft.style.display = "block";
    blocoSeguro.style.display = "none";
  } else if (seguro.checked) {
    blocoSeguro.style.display = "block";
    blocoBikcraft.style.display = "none";
  } else {
    blocoBikcraft.style.display = "none";
    blocoSeguro.style.display = "none";
  }
}

bikcraft.addEventListener("change", atualizar);
seguro.addEventListener("change", atualizar);

atualizar();
/* Script de exibição de seções conforme seleção do usuário na página Orçamento */
