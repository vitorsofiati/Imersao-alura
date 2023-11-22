const listaJogadores = [
  { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Valentina", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
  { nome: "Enzo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
]

const tabelaJogadores = document.getElementById("tabelaJogadores");

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
  <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
  <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
  <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
  </tr>
    `;
    // ${i} passa a referência apenas do índice (que será usado na declaração das funções abaixo). Usar ${array[i]} iria passar o objeto inteiro.
  }
}

exibirNaTela();


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