const database = require("../database/config");

function criarQuestionario(descricao) {
  var instrucaoSql = `
    INSERT INTO questionario (descricao)
    VALUES ('${descricao}');
  `;

  console.log(">>>> QUESTIONARIO MODEL: executando SQL:\n" + instrucaoSql);

  return database.executar(instrucaoSql);
}

module.exports = {
  criarQuestionario
};
