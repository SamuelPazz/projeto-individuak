var quizModel = require("../models/quizModel");

function registrarDados(req, res) { 
    var acertos = req.body.acertosServer
    var fkUsuario = req.params.fkUsuario
  
    quizModel.registrar(acertos, fkUsuario)
        .then(
            function(resultado) {
                res.status(201).send({})
            }
        )
}

module.exports = {
    registrarDados
}