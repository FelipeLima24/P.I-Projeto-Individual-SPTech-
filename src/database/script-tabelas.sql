
CREATE DATABASE smartshape;
USE smartshape;

-- Tabela usuario
CREATE TABLE usuario (
 idCliente INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
 nome VARCHAR(45) NOT NULL,
 email VARCHAR(45) NOT NULL UNIQUE,
 telefone CHAR(11) NOT NULL UNIQUE,
 cpf CHAR(11) NOT NULL UNIQUE,
 senha VARCHAR(45) NOT NULL
);


-- Tabela treino
CREATE TABLE treino (
 idTreino INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 tipo VARCHAR(45) NOT NULL,
 dia VARCHAR(45) NOT NULL,
 exercicios VARCHAR(45) NOT NULL
 );


-- Tabela dietas
CREATE TABLE dieta (
  idDieta INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  calorias  FLOAT NOT NULL,
  alimentos VARCHAR(45) NOT NULL
);


-- Tabela protocolo associativa
CREATE TABLE protocolo (
  idTreino INT NOT NULL,
  idDieta INT NOT NULL,
  fkCliente INT NOT NULL,
  dtInicio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  dtFinal DATE,
  PRIMARY KEY (idTreino, idDieta, fkCliente),
  FOREIGN KEY (idTreino) REFERENCES treino  (idTreino),
  FOREIGN KEY (idDieta)  REFERENCES dieta   (idDieta),
  FOREIGN KEY (fkCliente) REFERENCES usuario (idCliente)
);