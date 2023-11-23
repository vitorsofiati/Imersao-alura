let listaJogadores = [
  { nome: "Valentina", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Enzo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
]

const botaoNovoJogador = document.getElementById("botao-novo-jogador");
const submitNovoJogador = document.querySelector(".novo-jogador button");
const botaoZerar = document.getElementById("botao-zerar");
const botaoRedefinir = document.getElementById("botao-redefinir");
const tabelaJogadores = document.getElementById("tabela-jogadores");


function atualizarTabela() {
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
  <td><button class="icon botao-excluir" onClick="excluirJogador(${i})"></button></td>
  </tr>
    `;
    // ${i} acima passa a referência apenas do índice (que será usado na declaração das funções abaixo). Usar ${array[i]} iria passar o objeto inteiro.
  }
}
atualizarTabela();


function adicionarVitoria(index) {
  listaJogadores[index].vitorias++;
  listaJogadores[index].pontos += 3;
  atualizarTabela();
};

function adicionarEmpate(index) {
  listaJogadores[index].empates++;
  listaJogadores[index].pontos++;
  atualizarTabela();
};
function adicionarDerrota(index) {
  listaJogadores[index].derrotas++;
  atualizarTabela();
};

function excluirJogador(index) {
  // splice remove, substitui ou adiciona itens de array a partir de um indice.
  // (a partir do indice index, remova 1 item)
  listaJogadores.splice(index, 1);
  atualizarTabela();
}


// toggle para o campo de input
function esconder() {
  const inputNovoJogador = document.querySelector(".novo-jogador");
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
    atualizarTabela();
    // .textContent altera apenas o texto, sem interpretar tags HTML.Nesse caso é melhor por desempenho e compatibilidade.
    mensagemErro.textContent = ""
  } else {
    mensagemErro.textContent = "Por favor, insira um nome válido!";
  }
}

// input de novo jogador através da tecla enter também.
function teclaEnter(event) {
  if (event.key === "Enter") {
    inserirJogador();
  }
}

function zerarPontos() {
  for (let i = 0; i < listaJogadores.length; i++) {
    listaJogadores[i].vitorias = 0;
    listaJogadores[i].empates = 0;
    listaJogadores[i].derrotas = 0;
    listaJogadores[i].pontos = 0;
  }
  atualizarTabela();
}

// apaga todos os dados da array e atualiza o conteúdo da tabela
function redefinirTabela() {
  listaJogadores = [];
  tabelaJogadores.innerHTML = "";
}

atualizarTabela();


// botoes
botaoNovoJogador.addEventListener("click", esconder);
submitNovoJogador.addEventListener("click", inserirJogador);
botaoZerar.addEventListener("click", zerarPontos);
botaoRedefinir.addEventListener("click", redefinirTabela);
