const form = document.getElementById("formulario");
const botaoCadastrar = document.getElementById("cadastrar");

const duracao = 1800;
const textosEnviando = ["Enviando", "Enviando.", "Enviando..", "Enviando..."];

let animacaoEnvio = null;

function iniciarAnimacaoBotao() {
  let indice = 0;

  botaoCadastrar.disabled = true;
  botaoCadastrar.dataset.loading = "true";
  botaoCadastrar.textContent = textosEnviando[indice];

  animacaoEnvio = window.setInterval(() => {
    indice = (indice + 1) % textosEnviando.length;
    botaoCadastrar.textContent = textosEnviando[indice];
  }, 250);
}

function finalizarBotao() {
  if (animacaoEnvio) {
    window.clearInterval(animacaoEnvio);
  }

  animacaoEnvio = null;
  botaoCadastrar.disabled = false;
  botaoCadastrar.dataset.loading = "false";
  botaoCadastrar.textContent = "Cadastrar";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const estado = document.getElementById("estado").value;

  if (!email || !senha || !estado) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!email.includes("@")) {
    alert("Por favor, insira um email válido.");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve conter pelo menos 6 caracteres.");
    return;
  }

  iniciarAnimacaoBotao();

  await new Promise((resolve) => {
    window.setTimeout(resolve, duracao);
  });

  finalizarBotao();
  alert(`Cadastro realizado com sucesso!\nEmail: ${email}\nEstado: ${estado}`);
  form.reset();
});
