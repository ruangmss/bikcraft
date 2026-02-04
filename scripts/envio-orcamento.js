document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.orcamento");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { Accept: "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            alert("Orçamento enviado com sucesso!");
            this.reset();
          } else {
            alert("Erro ao enviar. Tente novamente.");
          }
        })
        .catch(() => {
          alert("Falha na conexão.");
        });
    });
  }
});
