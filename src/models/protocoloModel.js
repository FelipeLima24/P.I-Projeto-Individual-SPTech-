var database = require("../database/config");


function cadastrarProtocolo(fkQuestionario, fkUsuario, altura, peso,
    idade, sexo, objetivo, musculo, estiloTreino, exercicios, calorias, carboidratos, proteinas, gorduras, dias) {
    console.log("`>>>> PROTOCOLO MODEL: cadastrarProtocolo():`, fkQuestionario=", fkQuestionario, "fkUsuario=", fkUsuario,
        "altura=", altura, "peso=", peso, "idade=", idade, "sexo=", sexo, "objetivo=", objetivo, "musculo=", musculo, "estiloTreino=", estiloTreino,
        "exercicios=", exercicios, "exercicios=", exercicios, "dias=", dias);

    function criarQuestionario(descricao) {
    return database.executar(`
    INSERT INTO questionario (descricao) 
    VALUES ('${descricao}');
    `);
    }

    var instrucaoSql = `
        INSERT INTO protocolo (fkQuestionario, fkUsuario, altura, peso, 
    idade, sexo, objetivo, musculo, estiloTreino, exercicios, calorias, carboidratos, proteinas, gorduras, dias)
        VALUES (
        ${fkQuestionario}, 
        ${fkUsuario}, 
        ${altura}, 
        ${peso}, 
        ${idade}, 
        '${sexo}', 
        '${objetivo}',
        '${musculo}',
        '${estiloTreino}', 
        '${exercicios}', 
        ${calorias}, 
        ${carboidratos}, 
        ${proteinas}, 
        ${gorduras}, 
        ${dias} )
        `;
    console.log("`>>>> PROTOCOLO MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarProtocolos() {
  const sql = "SELECT * FROM protocolo;";
  console.log("`>>>> PROTOCOLO MODEL: executando SQL:`\n" + sql);
  return database.executar(sql);
}

module.exports = {
  cadastrarProtocolo,
  listarProtocolos
};