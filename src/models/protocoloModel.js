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

<<<<<<< HEAD
function contarEmagrecer() {
    var instrucao = `
        SELECT COUNT(*) AS emagrecer
        FROM protocolo
        WHERE objetivo = 'emagrecer';
    `;
    return database.executar(instrucao);
}

function contarMassa() {
    var instrucao = `
        SELECT COUNT(*) AS massa
        FROM protocolo
        WHERE objetivo = 'massa';
    `;
    return database.executar(instrucao);
}

function contarPeso() {
    var instrucao = `
        SELECT 
            fkUsuario,
            ROUND(AVG(peso), 1) AS pesoMedio
        FROM protocolo
        GROUP BY fkUsuario;
    `;
    return database.executar(instrucao);
}

module.exports = {
  cadastrarProtocolo,
  listarProtocolos,
  contarEmagrecer,
  contarMassa,
  contarPeso
=======
module.exports = {
  cadastrarProtocolo,
  listarProtocolos
>>>>>>> 33ac66877ae88153f260da2b6e725a5ab8697e40
};