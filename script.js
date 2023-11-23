const listaJogadores = [
  { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Valentina", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Enzo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
]

const tabelaJogadores = document.getElementById("tabela-jogadores");
const botaoNovoJogador = document.getElementById("botao-novo-jogador");
const inputNovoJogador = document.querySelector(".novo-jogador");
const submitNovoJogador = document.querySelector(".novo-jogador button");

function exibirNaTela() {
  // limpar a tabela para não duplicar (antes do loop pra n limpar cada linha)
  tabelaJogadores.innerHTML = "";
  for (let i = 0; i < listaJogadores.length; i++) {
    tabelaJogadores.innerHTML += ` 
  <tr>
  <td>${listaJogadores[i].nome}</td>
  <td>${listaJogadores[i].vitorias}</td>
  <td>${listaJogadores[i].empates}</td>
  <td>${listaJogadores[i].derrotas}</td>
  <td>${listaJogadores[i].pontos}</td>
  <td><button class="botao-tabela" onClick="adicionarVitoria(${i})">Vitória</button></td>
  <td><button class="botao-tabela" onClick="adicionarEmpate(${i})">Empate</button></td>
  <td><button class="botao-tabela" onClick="adicionarDerrota(${i})">Derrota</button></td>
  <td><button class="icon botao-excluir"></button></td>
  </tr>
    `;
    // ${i} passa a referência apenas do índice (que será usado na declaração das funções abaixo). Usar ${array[i]} iria passar o objeto inteiro.
  }
}

function adicionarVitoria(index) {
  listaJogadores[index].vitorias++;
  listaJogadores[index].pontos += 3;
  exibirNaTela();
};

function adicionarEmpate(index) {
  listaJogadores[index].empates++;
  listaJogadores[index].pontos++;
  exibirNaTela();
};
function adicionarDerrota(index) {
  listaJogadores[index].derrotas++;
  exibirNaTela();
};

function esconder() {
  inputNovoJogador.classList.toggle("escondido");
}

function inserirJogador() {
  let input = document.getElementById("nome").value;
  let mensagemErro = document.querySelector(".mensagem-erro");
  let regexLetras = /^[a-zA-Z\s]+$/;

  // variavel.trim() remove os espaços em branco do início e final da string. Pega apenas o conteúdo real dela para fazer a comparação. Nesse caso, seria vazio (independente de quantos espaços tiverem em volta)
  // .test é uma função embutida (e exclusiva) para expressões regulares. Nesse caso vai testar se INPUT corresponde ao regex criado acima. Retorna um valor Booleano.
  if (input.trim() !== "" && regexLetras.test(input)) {
    listaJogadores.push({ nome: input, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 });
    document.getElementById("nome").value = "";
    exibirNaTela();
    // .textContent altera apenas o texto, sem interpretar tags HTML. é melhor por desempenho e compatibilidade.
    mensagemErro.textContent = ""
  } else {
    mensagemErro.textContent = "Por favor, insira um nome válido!";
  }
}

function teclaEnter(event) {
  if (event.key === "Enter") {
    inserirJogador();
  }
}

exibirNaTela();

botaoNovoJogador.addEventListener("click", esconder);
submitNovoJogador.addEventListener("click", inserirJogador);

