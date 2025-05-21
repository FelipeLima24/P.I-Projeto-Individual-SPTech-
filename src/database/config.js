var mysql = require("mysql2");
require("dotenv").config({ path: process.env.AMBIENTE_PROCESSO === "producao" ? ".env" : ".env.dev" });

// CONEXÃO DO BANCO MYSQL SERVER
var mySqlConfig = {
    host:     process.env.DB_HOST,
    database: process.env.DB_DATABASE || process.env.DB_NAME,  // ← ajustado aqui
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port:     process.env.DB_PORT || 3306
};

console.log("DB_CONN →", {
  host:     process.env.DB_HOST,
  database: process.env.DB_DATABASE || process.env.DB_NAME,
  user:     process.env.DB_USER,
  port:     mySqlConfig.port
});

function executar(instrucao) {
    if (process.env.AMBIENTE_PROCESSO !== "producao"
     && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE NÃO FOI DEFINIDO EM .env OU .env.dev\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO");
    }

    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(instrucao, function (erro, resultados) {
            conexao.end();
            if (erro) {
                reject(erro);
                return;
            }
            console.log("RESULTADOS:", resultados);
            resolve(resultados);
        });
        conexao.on('error', function (erro) {
            console.error("ERRO NO MySQL SERVER:", erro.sqlMessage);
            reject(erro);
        });
    });
}

module.exports = {
    executar
};
