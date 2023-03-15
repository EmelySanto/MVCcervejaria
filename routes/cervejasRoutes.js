const express = require('express');
const router = express.Router();
const controller = require("../controlador/cervejas");

router.get('/filtrar/nome/:nome', controller.getNome);
router.get('/filtrar/pac/:pac', controller.getNomeAbr);
router.get('/filtrar/nacionalidade/:nac', controller.getNac);
router.get('/filtrar/tipo/:t', controller.getTipo);
router.get('/MaiorABV', controller.getAbv);
router.get('/cervejas', controller.getCervejas)
router.post('/cadastrar-cerveja', controller.cadastrarCerverja)

module.exports = router;