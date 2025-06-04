const database = require("../database/config");

function criarQuestionario(descricao) {
  return database.executar(`
    INSERT INTO questionario (descricao)
    VALUES (NULL);
  `);
}

module.exports = { 
  criarQuestionario 
};