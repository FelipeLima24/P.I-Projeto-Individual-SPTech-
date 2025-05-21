var database = require("../database/config");

function autenticar(email, senha) {
    console.log(
        "ACESSEI O USUARIO MODEL \n\n\t\t" +
        ">> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t" +
        ">> verifique suas credenciais de acesso ao banco\n\t\t" +
        ">> e se o servidor de seu BD está rodando corretamente.\n\n" +
        "function autenticar():", email, senha
    );
    var instrucaoSql = `
  INSERT INTO usuarioCadastro (nome, email, telefone, cpf, senha)
  VALUES ('${nome}', '${email}', '${telefone}', '${cpf}', '${senha}');
`;
    console.log("Executando a instrução SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, telefone, cpf, senha) {
    console.log(
        "ACESSEI O USUARIO MODEL \n\n\t\t" +
        ">> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t" +
        ">> verifique suas credenciais de acesso ao banco\n\t\t" +
        ">> e se o servidor de seu BD está rodando corretamente.\n\n" +
        "function cadastrar():", nome, email, telefone, cpf, senha
    );
    var instrucaoSql = `
        INSERT INTO usuarioCadastro (nome, email, telefone, cpf, senha)
        VALUES ('${nome}', '${email}', '${telefone}', '${cpf}', '${senha}');
    `;
    console.log("Executando a instrução SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};