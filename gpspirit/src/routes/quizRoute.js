var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// router.post("paginaUsuario//registrar/:fkUsuario", function (req, res) {
router.post("/registrar/:fkUsuario", function (req, res) {
    quizController.registrarDados(req, res);
});

module.exports = router;