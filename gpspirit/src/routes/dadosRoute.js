var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/puxarMaxAcertos", function(req, res) {
    dadosController.puxarMaxAcertos(req ,res);
})

router.post("/puxarMaxTentativas", function(req, res) {
    dadosController.puxarMaxTentativas(req ,res);
})


router.post("/puxarTentativasAcertos", function(req, res) {
    dadosController.puxarTentativasAcertos(req ,res);
})

router.post("/puxarCategorias", function(req, res) {
    dadosController.puxarCategorias(req ,res);
})

module.exports = router;