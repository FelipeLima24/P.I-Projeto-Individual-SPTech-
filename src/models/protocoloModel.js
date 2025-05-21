var database = require("../database/config");


    function cadastrarProtocolo(idTreino, idDieta, fkUsuario, dtInicio) {
    console.log("`>>>> PROTOCOLO MODEL: cadastrarProtocolo():`, idTreino=", idTreino, "idDieta=", idDieta, 
        "fkUsuario=", fkUsuario, "dtInicio=", dtInicio);

    var instrucaoSql = `
        INSERT INTO protocolo (idTreino, idDieta, fkUsuario)
        VALUES (${idTreino}, ${idDieta}, ${fkUsuario})
    `;
    console.log("`>>>> PROTOCOLO MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarProtocolos() {
    var instrucaoSql = `SELECT * FROM protocolo;`;
    console.log("`>>>> PROTOCOLO MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarProtocolo(idTreino, idDieta, fkUsuario, dtInicio) {
    var instrucaoSql = `
        SELECT * FROM protocolo
          WHERE idTreino  = ${idTreino}
            AND idDieta   = ${idDieta}
            AND dtInicio = ${dtInicio}
            AND fkUsuario = ${fkUsuario};
    `;
    console.log("`>>>> PROTOCOLO MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarProtocolo,
    listarProtocolos,
    buscarProtocolo
};