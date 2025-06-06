var cadastroModel = require("../models/cadastroModel");

function entrar(req, res) {
    var email = req.body.emailServer;       
    var senha = req.body.senhaServer;       

    // validação 
    if (email == undefined || senha == undefined) {
        res.status(400).send("Seu email e/ou senha estão indefinidos!");
        return;
    }
    
    cadastroModel.autenticar(email, senha)
        .then(function(resultado) {
            if (resultado.length > 0) {
                  res.status(200).json(resultado);  
            } else {
                res.status(403).send("Email e/ou senha inválido(s)");
            }
        })
        .catch(function(error) {
            console.error("Erro na autenticação de usuário:", error, error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

// cadastrar usuario
function cadastrar(req, res) {
    var nome     = req.body.nomeServer;      
    var email    = req.body.emailServer;     
    var telefone = req.body.telefoneServer;  
    var cpf      = req.body.cpfServer;       
    var senha    = req.body.senhaServer;    

    // validação 
    if (nome == '' || email == '' || telefone == '' || cpf == '' || senha == '') {
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    }

    
    cadastroModel.cadastrar(nome, email, telefone, cpf, senha)
        .then(
            function (resultado) {
              res.status(201).json(resultado);
        })
        .catch(function(error) {
            console.error("Erro no cadastro de usuário:", error, error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

module.exports = {
    entrar,
    cadastrar
};
