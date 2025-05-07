CREATE DATABASE smartshape;
USE smartshape;


CREATE TABLE usuario (
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  nome      VARCHAR(45) NOT NULL,
  email     VARCHAR(45) NOT NULL UNIQUE,
  telefone  CHAR(10)    NOT NULL UNIQUE,
  cpf       CHAR(11)    NOT NULL UNIQUE
);


CREATE TABLE treino (
  idTreino   INT AUTO_INCREMENT PRIMARY KEY,
  tipo       VARCHAR(45) NOT NULL,
  dia        VARCHAR(45),
  exercicios VARCHAR(45)
);


CREATE TABLE dieta (
  idDieta   INT AUTO_INCREMENT PRIMARY KEY,
  calorias  FLOAT NOT NULL,
  alimentos VARCHAR(45)
);


CREATE TABLE protocolo (
  idProtocolo  INT AUTO_INCREMENT PRIMARY KEY,
  metodoTreino VARCHAR(45) NOT NULL,
  fkUsuario INT NOT NULL,
  fkTreino  INT NOT NULL,
  fkDieta   INT NOT NULL,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
  FOREIGN KEY (fkTreino)  REFERENCES treino(idTreino),
  FOREIGN KEY (fkDieta)   REFERENCES dieta(idDieta)
);