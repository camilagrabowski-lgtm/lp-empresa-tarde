let modelo = '';
let cor = '';
let tamanho = '';

function atualizarMensagem() {
  const mensagem = `Olá, eu vou querer o modelo ${modelo}, com cor ${cor} e tamanho ${tamanho}.`;
  document.getElementById('mensagem').value = mensagem;

  const nome = document.getElementById('nome').value;
  const texto = encodeURIComponent(`Nome: ${nome}\n${mensagem}`);

  document.getElementById('whatsapp').href =
    `https://wa.me/5541997681240?text=${texto}`; // número da loja
}

function selecionarModelo(m) {
  modelo = m;
  atualizarMensagem();
}

function selecionarCor(c) {
  cor = c;
  atualizarMensagem();
}

function selecionarTamanho(t) {
  tamanho = t;
  atualizarMensagem();
}
