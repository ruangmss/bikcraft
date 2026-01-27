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
