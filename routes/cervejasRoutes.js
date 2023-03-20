const express = require('express');
const router = express.Router();
const controller = require("../controlador/cervejas");

router.get('cervejas/filtrar/nome/:nome', controller.getNome);
router.get('cervejas/filtrar/pac/:pac', controller.getNomeAbr);
router.get('cervejas/filtrar/nacionalidade/:nac', controller.getNac);
router.get('cervejas/filtrar/tipo/:t', controller.getTipo);
router.get('cervejas/MaiorABV', controller.getAbv);
router.get('/cervejas', controller.getCervejas)
router.post('/cervejas/cadastrar', controller.cadastrarCerverja)

module.exports = router;