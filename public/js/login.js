function entrar() {
  var email  = document.getElementById("ipt_email").value;
  var senha  = document.getElementById("ipt_senha").value;
  var msg = document.getElementById("msg");

 
  if (email == '' || senha == '') {
    msg.innerHTML  = "Por favor preencha com todos os campos";
    return;
  }

  fetch("http://localhost:3333/login/autenticar", {
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
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "protocolo.html";
  })
  .catch(err => {
    console.error("Erro no login:", err);
    msg.innerHTML = err.message;
  });
}
