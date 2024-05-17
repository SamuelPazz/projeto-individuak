var database = require("../database/config")

function registrar(acertos, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO quiz (acertos, fkUsuario) VALUES ('${acertos}', '${fkUsuario}');`;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};