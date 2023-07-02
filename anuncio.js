// Função para criar o novo elemento content
function criarElemento() {
    // Obter os valores do título e descrição
    var tituloValue = document.getElementById("tituloValue").value;
    var descricaoValue = document.getElementById("descricaoValue").value;
  
    // Criar o novo elemento content
    var novoElemento = document.createElement("div");
    novoElemento.classList.add("content");
  
    var novoTitulo = document.createElement("h1");
    novoTitulo.textContent = tituloValue;
  
    var novoDescricao = document.createElement("p");
    novoDescricao.textContent = descricaoValue;
  
    novoElemento.appendChild(novoTitulo);
    novoElemento.appendChild(novoDescricao);
  
    // Adicionar o novo elemento ao documento
    var mainElement = document.querySelector("main");
    mainElement.appendChild(novoElemento);
  }
  
  // Chamada da função ao clicar no botão "Criar"
  var botaoEnviar = document.getElementById("botao-enviar");
  botaoEnviar.addEventListener("click", criarElemento);
  