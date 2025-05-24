var database = require("../database/config");

function criarQuestionario() {
    console.log(
        "`>>>> QUESTIONARIO MODEL: criarQuestionario()`\n\n\t\t" +
        ">> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t" +
        ">> verifique suas credenciais de acesso ao banco\n\t\t" +
        ">> e se o servidor de seu BD está rodando corretamente.\n\n"
    );
    var instrucaoSql = `
        INSERT INTO questionario (descricao)
        VALUES ('');
    `;
    console.log("`>>>> QUESTIONARIO MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    criarQuestionario,

};
