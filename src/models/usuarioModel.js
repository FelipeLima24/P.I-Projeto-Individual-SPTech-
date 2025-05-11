var database = require("../database/config")

function cadastrar(nome, email, telefone, cpf, senha) {

var instrucaoSql = `insert into usuario(nome, email, telefone, cpf, senha) 
values('${nome}, ${email}, ${telefone}, ${cpf}, ${senha}')`
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

module.exports={
    cadastrar
}


