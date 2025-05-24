function cadastrar() {

  var nome = ipt_nome.value;
  var email = ipt_email.value;
  var telefone = ipt_telefone.value;
  var cpf = ipt_cpf.value;
  var senha = ipt_senha.value;

  console.log("Nome: ", nome);
  console.log("Email:", email);
  console.log("Telefone:", telefone);
  console.log("Cpf:", cpf);
  console.log("Senha:", senha);

  if (email == '' || nome == '' || telefone == '' || senha == '' || cpf == '') {
    msg.innerHTML = `Por favor insira todos os campos!`
  }

  fetch("http://localhost:3333/cadastroRoute/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeServer: nome,
      emailServer: email,
      telefoneServer: telefone,
      cpfServer: cpf,
      senhaServer: senha
    })
  })

     .then(res => {
    if (!res.ok) {
      throw new Error("Falha no cadastro");
    }
    return res.json();         
  })
  .then(json => {
    msg.style.color = 'green';
    msg.innerHTML = ` Cadastro realizado com sucesso!`;
    window.location.href = 'login.html';
  })
  .catch(err => {
    console.error("Erro na resposta do servidor:", err);
    msg.style.color = 'red';
    msg.innerHTML = ` Erro ao cadastrar. Tente novamente.`;
  });
}