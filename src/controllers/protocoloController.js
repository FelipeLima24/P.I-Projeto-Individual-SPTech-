var protocoloModel = require("../models/protocoloModel");

function cadastrar(req, res) {
    console.log(">>>> PROTOCOLO CONTROLLER: cadastrar(). Body:", req.body);

    var fkQuestionario = req.body.fkQuestionarioServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var altura = req.body.alturaServer;
    var peso = req.body.pesoServer;
    var idade = req.body.idadeServer;
    var sexo = req.body.sexoServer;
    var estiloTreino = req.body.estiloTreinoServer;
    var exercicios = req.body.exerciciosServer;
    var calorias = req.body.caloriasServer;
    var carboidratos = req.body.carboidratosServer;
    var proteinas = req.body.proteinasServer;
    var gorduras = req.body.gordurasServer;
    var dias = req.body.diasServer

    if (
        fkQuestionario == '' ||
        fkUsuario == '' ||
        altura == '' ||
        peso == '' ||
        idade == '' ||
        sexo == '' ||
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

    protocoloModel.cadastrarProtocolo(
        fkQuestionario,
        fkUsuario,
        altura,
        peso,
        idade,
        sexo,
        estiloTreino,
        exercicios,
        calorias,
        carboidratos,
        proteinas,
        gorduras,
        dias
    )
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
    protocoloModel.listarProtocolos()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (error) {
            console.error(">>>> PROTOCOLO CONTROLLER: erro ao listar:", error);
            res.status(500).json(error.sqlMessage);
        });
}

function buscar(req, res) {

    var fkQuestionario = req.params.fkQuestionarioServer;
    var fkUsuario = req.params.fkUsuarioServer;
    var altura = req.params.alturaServer;
    var peso = req.params.pesoServer;
    var sexo = req.params.sexoServer;
    var idade = req.params.idadeServer;
    var estiloTreino = req.params.estiloTreinoServer;
    var exercicios = req.params.exerciciosServer;
    var calorias = req.params.caloriasServer;
    var carboidratos = req.params.carboidratosServer;
    var proteinas = req.params.proteinasServer;
    var gorduras = req.params.gordurasServer;
    var dias = req.params.diasServer

    console.log(">>>> PROTOCOLO CONTROLLER: buscar() chamado para", fkQuestionario, fkUsuario, altura, peso,
        idade, sexo, estiloTreino, exercicios, calorias, carboidratos, proteinas, gorduras, dias);

    protocoloModel.buscarProtocolo(fkQuestionario, fkUsuario, altura, peso,
        idade, sexo, estiloTreino, exercicios, calorias, carboidratos, proteinas, gorduras, dias)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (error) {
            console.error("Houve um erro ao realizar o protocolo! Erro:", error);
            res.status(500).json(error.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    listar,
    buscar
};
