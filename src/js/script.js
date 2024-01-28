const btnSelectPlataforma = document.getElementById("btn-select-plataforma");
const plataformasList = document.getElementById("listaPlataformas");

const openList = () => {
  plataformasList.add("ativo");
};

const closeList = () => {
  plataformasList.remove("ativo");
};

const handleClick = () => {
  if (!plataformasList.classList.contains("ativo")) {
    plataformasList.classList.add("ativo");
  } else {
    console.log("Já possui a classe.");
  }
};

btnSelectPlataforma.addEventListener("click", handleClick);
