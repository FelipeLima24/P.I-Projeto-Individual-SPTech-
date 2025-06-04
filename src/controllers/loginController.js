var loginModel = require("../models/loginModel");

function entrar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  // validação
  if (email == '' || senha == '') {
    res.status(400).send("Email e/ou senha não informados!");
    return;
  }

  loginModel.autenticar(email, senha)
    .then(resultado => {
      if (resultado.length > 0) {
        res.status(200).json(resultado[0]);
      } else {
        res.status(403).send("Email e/ou senha inválido(s)");
      }
    })
    .catch(error => {
      console.error("Erro na autenticação de usuário:", error.sqlMessage);
      res.status(500).json({ erro: error.sqlMessage });
    });
}

module.exports = {
  entrar
};
