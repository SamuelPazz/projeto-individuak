var database = require("../database/config");

function puxarMaxAcertos(fkUsuario) {
    var instrucaoSql = `SELECT MAX(acertos) AS MaxPontos FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log('Puxando o MaxPontos' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function puxarMaxTentativas(fkUsuario) {
    var instrucaoSql = `SELECT MAX(idTentativa) AS MaxTentativas FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log('Puxando o MaxTentativas' + instrucaoSql);
    return database.executar(instrucaoSql);
}


function puxarTentativasAcertos(fkUsuario) {

    var instrucaoSql = `SELECT idTentativa AS Tentativas, acertos AS Pontos FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Puxando tentativas e acertos" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function puxarCategorias() {
    var instrucaoSql = `SELECT categoria.nome as NomeCategoria, COUNT(usuario.fkCategoria) as QtdEscolhidas FROM usuario 
    RIGHT JOIN categoria ON categoria.idCategoria = fkCategoria GROUP BY categoria.nome;`;
    console.log("Puxando as categorias" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    puxarMaxAcertos,
    puxarMaxTentativas,
    puxarTentativasAcertos,
    puxarCategorias
}
