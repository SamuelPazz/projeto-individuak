
create database gpspirit;

use gpspirit;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
categoriafav varchar(45),
email varchar(45) unique,
senha varchar(45));


create table quiz(
idQuiz int primary key auto_increment,
acertos int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario));





