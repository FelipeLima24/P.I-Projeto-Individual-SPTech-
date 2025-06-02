const database = require("../database/config");

function criarQuestionario(descricao) {
  return database.executar(`
    INSERT INTO questionario (descricao)
    VALUES (NULL);
  `);
}
    console.log("`>>>> QUESTIONARIO MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);



module.exports = {
    criarQuestionario,

};
