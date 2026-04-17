const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const estado = document.getElementById("estado").value;

  if (email && senha && estado) {
    alert(`Email: ${email}\nSenha: ${senha}\nEstado: ${estado}`);
  } else {
    alert("Por favor, preencha todos os campos.");
  }

  if (estado === null || estado === undefined || estado === "") {
    alert("O campo de estado é obrigatório.");
  }

  if (senha.length < 6) {
    alert("A senha deve conter pelo menos 6 caracteres.");
  }

  if (!email.includes("@")) {
    alert("Por favor, insira um email válido.");
  }
  
});
