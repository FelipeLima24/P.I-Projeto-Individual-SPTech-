
CREATE DATABASE smartshape;
USE smartshape;

-- Tabela usuarioCadastro
CREATE TABLE usuarioCadastro (
 idUsuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 nome VARCHAR(45) NOT NULL,
 email VARCHAR(45) NOT NULL UNIQUE,
 telefone CHAR(11) NOT NULL UNIQUE,
 cpf CHAR(11) NOT NULL UNIQUE,
 senha VARCHAR(45) NOT NULL
);

select * from usuarioCadastro;

-- Tabela questionário
CREATE TABLE questionario ( 
idQuestionario INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(250),
dtInicio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tabela protocolo associativa
CREATE TABLE protocolo (
fkQuestionario INT,
fkUsuario INT,
altura FLOAT,
peso FLOAT,
sexo CHAR(1),
idade INT,
estiloTreino VARCHAR(45),
exercicios VARCHAR(45),
calorias FLOAT,
carboidratos FLOAT,
proteinas FLOAT,
gorduras FLOAT,
dias INT,
CONSTRAINT chkSexoUsuario	
CHECK (status IN ('m', 'f', 'F', 'M')),
PRIMARY KEY (fkQuestionario, fkUsuario),
FOREIGN KEY (fkQuestionario)
REFERENCES questionario(idQuestionario),
FOREIGN KEY (fkUsuario)
REFERENCES usuarioCadastro(idUsuario)
);


select * from protocolo;