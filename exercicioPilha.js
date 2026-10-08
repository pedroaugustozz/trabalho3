const MinhaPilha = require('./pilha.js');

const bau = new MinhaPilha();

bau.adicionar("Ouro");
bau.adicionar("Prata");
bau.adicionar("Diamante");

console.log("Último guardado:", bau.topo());
console.log("Retirando:", bau.remover());
console.log("Novo topo:", bau.topo());
console.log("Está vazio?", bau.estaVazia());

bau.remover();
bau.remover();
console.log("Está vazio agora?", bau.estaVazia());