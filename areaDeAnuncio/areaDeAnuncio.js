// Obtenha as referências dos elementos do carrossel
const carrossel = document.getElementById('carrosel');
const imagens = carrossel.getElementsByTagName('img');
const btnAnterior = carrossel.getElementsByClassName('icon')[0];
const btnProximo = carrossel.getElementsByClassName('icon')[1];

let indiceAtual = 0; // Índice da imagem atual

// Função para exibir a imagem atual
function exibirImagemAtual() {
  // Ocultar todas as imagens
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].style.display = 'none';
  }
  // Exibir a imagem atual
  imagens[indiceAtual].style.display = 'block';
}

// Função para ir para a próxima imagem
function proximaImagem() {
  indiceAtual++;
  if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }
  exibirImagemAtual();
}

// Função para voltar para a imagem anterior
function imagemAnterior() {
  indiceAtual--;
  if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  }
  exibirImagemAtual();
}

// Adicionar os ouvintes de eventos aos botões de navegação
btnProximo.addEventListener('click', proximaImagem);
btnAnterior.addEventListener('click', imagemAnterior);

// Exibir a imagem inicial
exibirImagemAtual();
