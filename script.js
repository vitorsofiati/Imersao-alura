
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var valentina = { nome: "Valentina", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var enzo = { nome: "Enzo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

const tabelaJogadores = document.getElementById("tabelaJogadores");

function exibirNaTela() {
  tabelaJogadores.innerHTML = ` 
  <tr>
  <td>${paulo.nome}</td>
  <td>${paulo.vitorias}</td>
  <td>${paulo.empates}</td>
  <td>${paulo.derrotas}</td>
  <td>${paulo.pontos}</td>
  <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
  <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
  <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
  </tr>
  `;
}

exibirNaTela();


function adicionarVitoria(jogador) {
  jogador.vitorias++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
};

function adicionarEmpate(jogador) {
  jogador.empates++;
  jogador.pontos++;
  exibirNaTela();
};
function adicionarDerrota(jogador) {
  jogador.derrotas++;
  exibirNaTela();
  console.log(jogador);
};