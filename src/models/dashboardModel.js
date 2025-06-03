var database = require("../database/config");

function buscarPorUsuario(fkUsuario) {
    console.log("`>>>> DASHBOARD MODEL: buscarPorUsuario():`, fkUsuario=", fkUsuario);
    var instrucaoSql = `
        SELECT 
            fkUsuario,
            musculo,
            objetivo,
            peso
        FROM protocolo
       WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("`>>>> DASHBOARD MODEL: executando SQL:`\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPorUsuario
};