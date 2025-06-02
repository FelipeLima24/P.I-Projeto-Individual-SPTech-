const questionarioModel = require("../models/questionarioModel");

function criar(req, res) {
    questionarioModel.criarQuestionario()
        .then(result => {
            res.status(201).json({ idQuestionario: result.insertId });
        })
        .catch(error => {
            console.error(">>>> QUESTIONARIO CONTROLLER: erro ao criar:", error.sqlMessage);
            res.status(500).json({ erro: error.sqlMessage });
        });
}

module.exports = {
    criar
};
