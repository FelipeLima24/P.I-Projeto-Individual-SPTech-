function cadastrar() {

var nome = ipt_nome.value
var email = ipt_email.value
var telefone = ipt_telefone.value
var cpf = ipt_cpf.value
var senha = ipt_senha.value


    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("Telefone: " + telefone);
    console.log("Cpf: " + cpf);
    console.log("Senha: " + senha);

fetch("/usuarios/cadastrar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nomeServer: nome,
    emailServer: email,
    telefoneServer: telefone,
    cpfServer: cpf,
    senhaServer: senha,
  }),
})
  .then(function (resposta) {
    if (resposta.ok) {
      console.log("Resposta OK!");
      resposta.json().then((json) => {
        console.log(json);
        console.log(JSON.stringify(json));
      });
    } else {
      console.error("Erro na resposta do servidor:");
    }
  })
  .catch(function (erro) {
    console.error("Erro na requisição fetch:", erro);
  });
}

