var protocoloModel = require("../models/protocoloModel");
var questionarioModel = require("../models/questionarioModel");

function cadastrar(req, res) {
    console.log(">>>> PROTOCOLO CONTROLLER: cadastrar(). Body:", req.body);

    var fkUsuario = req.body.fkUsuarioServer;
    var altura = req.body.alturaServer;
    var peso = req.body.pesoServer;
    var idade = req.body.idadeServer;
    var sexo = req.body.sexoServer;
    var objetivo = req.body.objetivoServer;
    var musculo = req.body.musculoServer;
    var estiloTreino = req.body.estiloTreinoServer;
    var exercicios = req.body.exerciciosServer;
    var calorias = req.body.caloriasServer;
    var carboidratos = req.body.carboidratosServer;
    var proteinas = req.body.proteinasServer;
    var gorduras = req.body.gordurasServer;
    var dias = req.body.diasServer;

    // validação
    if (
        fkUsuario == '' ||
        altura == '' ||
        peso == '' ||
        idade == '' ||
        sexo == '' ||
        objetivo == '' ||
        musculo == '' ||
        estiloTreino == '' ||
        exercicios == '' ||
        calorias == '' ||
        carboidratos == '' ||
        proteinas == '' ||
        gorduras == '' ||
        dias == ''
    ) {
        res.status(400).send("Campos obrigatórios ausentes.");
        return;
    }

    questionarioModel.criarQuestionario("Protocolo automático")
        .then(result => {
            var novoIdQ = result.insertId;
            return protocoloModel.cadastrarProtocolo(
                novoIdQ,
                fkUsuario,
                altura,
                peso,
                idade,
                sexo,
                objetivo,
                musculo,
                estiloTreino,
                exercicios,
                calorias,
                carboidratos,
                proteinas,
                gorduras,
                dias
            );
        })
        .then(function (resultado) {
            console.log(">>>> PROTOCOLO CONTROLLER: Promise resolvida:", resultado);
            res.status(201).json(resultado);
        })
        .catch(function (error) {
            console.error(">>>> PROTOCOLO CONTROLLER: erro ao cadastrar:", error);
            res.status(500).json({ erro: error.sqlMessage });
        });
}


function listar(req, res) {
  console.log(">>>> PROTOCOLO CONTROLLER: listar() chamado");
  protocoloModel
    .listarProtocolos()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((error) => {
      console.error(">>>> PROTOCOLO CONTROLLER: erro ao listar:", error.sqlMessage);
      res.status(500).json({ erro: error.sqlMessage });
    });
}

function contarEmagrecer(req, res) {
    protocoloModel.contarEmagrecer()
        .then((resultado) => {
            res.status(200).json(resultado[0]); 
        })
        .catch((error) => {
            console.error(">>>> ERRO:", error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

function contarMassa(req, res) {
    protocoloModel.contarMassa()
        .then((resultado) => {
            res.status(200).json(resultado[0]); 
        })
        .catch((error) => {
            console.error(">>>> ERRO:", error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

function contarPeso(req, res) {
    protocoloModel.contarPeso()
        .then((resultado) => {
            res.status(200).json(resultado[0]); 
        })
        .catch((error) => {
            console.error(">>>> ERRO:", error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

module.exports = {
  cadastrar,
  listar,
  contarEmagrecer,
  contarMassa,
  contarPeso
};
