create database gpspirit;
use gpspirit;

create table quiz(
idQuiz int primary key auto_increment,
nome varchar(45) not null,
qtdPerguntas int not null);


create table categoria(
	idCategoria int primary key not null,
    nome varchar(45) not null);
    
create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45) not null,
fkCategoria int not null,
foreign key (fkCategoria) references categoria (idCategoria),
email varchar(45) not null unique,
senha varchar(45) not null);

create table tentativasQuiz (
idTentativa int,
fkUsuario int,
fkQuiz int,
foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkQuiz) references quiz(idQuiz),
primary key (idTentativa, fkUsuario, fkQuiz),
acertos int,
datahora datetime default current_timestamp);

insert into categoria values
	(1, 'Fórmula 1'),
    (2, 'Nascar'),
    (3, 'Endurence'),
    (4, 'Rally'),
    (5, 'Touring'),
    (6, 'Gran Turismo'),
    (7, 'Drift'),
    (8, 'Stock Car'),
    (9, 'Outra');
    
insert into quiz values
	(1, 'Quiz Geral sobre automobilismo', '16');

/* USUARIOMODEL
	
    -- SELECT LOGIN
	-- SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';

	-- INSERT CADASTRO
	-- INSERT INTO usuario (nome, fkCategoria, email, senha) VALUES ('${nome}', '${fkCategoria}', '${email}', '${senha}');

*/

/*  QUIZMODEL

	-- SELECT PUXARULTIMOID
	-- SELECT MAX(idTentativa) AS idTentativa FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};

	-- INSERT TENTATIVAQUIZ
	-- INSERT INTO tentativasQuiz (idTentativa, fkUsuario, fkQuiz, acertos) VALUES ('${idTentativa}', '${fkUsuario}', '${fkQuiz}', '${acertos}');

*/

/* DADOSMODEL
	-- SELECT MAX ACERTOS 
-- SELECT MAX(acertos) AS MaxPontos FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};

-- SELECT MAX TENTATIVAS
-- SELECT MAX(idTentativa) AS MaxTentativas FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};

-- SELECT TENTATIVASACERTOS
-- SELECT idTentativa AS Tentativas, acertos AS Pontos FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};

-- SELECT CATEGORIAS
-- SELECT categoria.nome as NomeCategoria, COUNT(usuario.fkCategoria) as QtdEscolhidas FROM usuario 
-- RIGHT JOIN categoria ON categoria.idCategoria = fkCategoria GROUP BY categoria.nome;
*/