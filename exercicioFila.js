const Fila = require('./Fila.js');

const filaImpressao = new Fila();
const limite = 5;

function adicionarDocumento(nome, paginas) {
  if (filaImpressao.tamanho() >= limite) {
    console.log("Fila cheia! Não foi possível adicionar:", nome);
    return;
  }
  filaImpressao.enqueue({ nome, paginas });
  console.log("Adicionado:", nome);
}

function processarImpressao() {
  const doc = filaImpressao.dequeue();
  if (doc) {
    console.log(`Imprimindo: ${doc.nome} (${doc.paginas} páginas)`);
  }
}

adicionarDocumento("Trabalho.pdf", 10);
adicionarDocumento("Foto.png", 1);
adicionarDocumento("Contrato.docx", 5);
adicionarDocumento("Apostila.pdf", 50);
adicionarDocumento("Slide.pptx", 15);
adicionarDocumento("Extra.pdf", 2);

console.log("\nPróximo da fila:", filaImpressao.front().nome);

console.log("\nIniciando impressões:");
while (!filaImpressao.estaVazia()) {
  processarImpressao();
}