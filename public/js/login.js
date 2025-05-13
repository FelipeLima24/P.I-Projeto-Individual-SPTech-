// login.js - lógica de autenticação

function entrar() {
  // 1) Captura valores dos inputs
  const email  = document.getElementById("ipt_email").value;
  const senha  = document.getElementById("ipt_senha").value;
  const msgDiv = document.getElementById("msgLogin");

  // 2) Validação simples antes de enviar
  if (!email || !senha) {
    msgDiv.textContent = "Preencha email e senha!";
    return;
  }

  // 3) Faz POST para o endpoint de login
  fetch("http://localhost:3333/usuarios/entrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      emailServer: email,
      senhaServer: senha
    })
  })
  .then(res => {
    if (res.status === 200) {
      return res.json();
    } else if (res.status === 403) {
      throw new Error("Credenciais inválidas");
    } else {
      throw new Error("Erro inesperado");
    }
  })
  .then(usuario => {
    // 4) Armazena dados e redireciona ao dashboard
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "dashboard.html";
  })
  .catch(err => {
    console.error("Erro no login:", err);
    msgDiv.textContent = err.message;
  });
}
