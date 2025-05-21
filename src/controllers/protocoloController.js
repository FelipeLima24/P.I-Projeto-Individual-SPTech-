var protocoloModel = require("../models/protocoloModel");


function cadastrar(req, res) {
    
    console.log(">>>> PROTOCOLO CONTROLLER: cadastrar(). Body:", req.body);

    var idTreino   = req.body.idTreinoServer;
    var idDieta    = req.body.idDietaServer;
    var fkUsuario  = req.body.fkUsuarioServer;
    var dtInicio = req.body.dtInicioServer;
    

    
    if (idTreino === undefined ||
        idDieta  === undefined ||
        fkUsuario=== undefined ||
        dtInicio       === undefined) {
        res.status(400).send("Campos obrigatórios: idTreino, idDieta, dtInicio");
        return;
    }

    
    protocoloModel.cadastrarProtocolo(
        idTreino,
        idDieta,
        fkUsuario,
        dtInicio
    )
    .then(function(resultado) {
        console.log(">>>> PROTOCOLO CONTROLLER: Promise resolvida:", resultado);
        res.status(201).json(resultado);
    })
    .catch(function(error) {
        console.error(">>>> PROTOCOLO CONTROLLER: erro ao cadastrar:", error);
        res.status(500).json({ erro: error.sqlMessage });
    });
}

function listar(req, res) {
    console.log(">>>> PROTOCOLO CONTROLLER: listar() chamado");
    protocoloModel.listarProtocolos()
    .then(function(resultado) {
        res.status(200).json(resultado);
    })
    .catch(function(error) {
        console.error(">>>> PROTOCOLO CONTROLLER: erro ao listar:", error);
        res.status(500).json(error.sqlMessage);
    });
}

function buscar(req, res) {
    var idTreino  = req.params.idTreino;
    var idDieta   = req.params.idDieta;
    var fkUsuario = req.params.fkUsuario;
    var dtInicio = req.params.fkUsuario;
    console.log(">>>> PROTOCOLO CONTROLLER: buscar() chamado para", idTreino, idDieta, fkUsuario, dtInicio);
    protocoloModel.buscarProtocolo(idTreino, idDieta, fkUsuario, dtInicio)
    .then(function(resultado) {
        res.status(200).json(resultado);
    })
    .catch(function(error) {
        console.error(">>>> PROTOCOLO CONTROLLER: erro ao buscar:", error);
        res.status(500).json(error.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    listar,
    buscar
};
