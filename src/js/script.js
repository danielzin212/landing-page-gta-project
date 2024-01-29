const btnSelecionarPlataforma = document.getElementById("btnSelectPlataforma");
const plataformasList = document.getElementById("listaPlataformas");

btnSelecionarPlataforma.addEventListener("click", () => {
  plataformasList.classList.toggle("ativo");
});
