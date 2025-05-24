var questionarioModel = require("../models/questionarioModel");

function criar(req, res) {
    console.log(">>>> QUESTIONARIO CONTROLLER: criar() chamado");

    questionarioModel.criarQuestionario()
        .then(function(resultado) {
            console.log(">>>> QUESTIONARIO CONTROLLER: Promise resolvida, insertId =", resultado.insertId);
            // busca o registro recém criado para obter dtInicio
            questionarioModel.listarQuestionarios()
                .then(function(rows) {
                    // o primeiro é o mais recente
                    res.status(201).json(rows[0]);
                })
                .catch(function(error) {
                    console.error(">>>> QUESTIONARIO CONTROLLER: erro ao listarQuestionarios:", error.sqlMessage);
                    res.status(500).json({ erro: error.sqlMessage });
                });
        })
        .catch(function(error) {
            console.error(">>>> QUESTIONARIO CONTROLLER: erro ao criarQuestionario:", error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

function listar(req, res) {
    console.log(">>>> QUESTIONARIO CONTROLLER: listar() chamado");
    questionarioModel.listarQuestionarios()
        .then(function(resultado) {
            res.status(200).json(resultado);
        })
        .catch(function(error) {
            console.error(">>>> QUESTIONARIO CONTROLLER: erro ao listarQuestionarios:", error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

module.exports = {
    criar,
    listar
};
