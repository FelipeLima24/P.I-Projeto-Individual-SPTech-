var database = require("../database/config");


function cadastrarProtocolo(fkQuestionario, fkUsuario, altura, peso,
    idade, sexo, estiloTreino, exercicios, calorias, carboidratos, proteinas, gorduras, dias) {
    console.log("`>>>> PROTOCOLO MODEL: cadastrarProtocolo():`, fkQuestionari=", fkQuestionario, "fkUsuario=", fkUsuario,
        "altura=", altura, "peso=", peso, "idade=", idade, "sexo=", sexo, "estiloTreino=", estiloTreino,
        "exercicios=", exercicios, "exercicios=", exercicios, "dias=", dias);

    var instrucaoSql = `
        INSERT INTO protocolo (fkQuestionario, fkUsuario, altura, peso, 
    idade, sexo, estiloTreino, exercicios, calorias, carboidratos, proteinas, gorduras, dias)
        VALUES (
        ${fkQuestionario}, 
        ${fkUsuario}, 
        ${altura}, 
        ${peso}, 
        ${idade}, 
        '${sexo}', 
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
    var instrucaoSql = `SELECT * FROM protocolo;`;
    console.log("`>>>> PROTOCOLO MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    cadastrarProtocolo,
    listarProtocolos
    
};