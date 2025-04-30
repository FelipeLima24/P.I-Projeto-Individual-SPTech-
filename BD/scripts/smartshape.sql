create database smartshape;
use smartshape;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) unique not null,
telefone char(10) unique not null,
cpf char(11) unique not null
);

create table protocolo (
idProtocolo int primary key auto_increment,
treino varchar(300) not null,
dieta varchar(300) not null,
metodoTreino varchar(45) not null,
fkUsuario int,
foreign key (fkusuario) references usuario(idUsuario)
);

