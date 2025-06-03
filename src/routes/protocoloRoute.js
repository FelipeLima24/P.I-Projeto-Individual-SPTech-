var express = require("express");
var router  = express.Router();
var protocoloController = require("../controllers/protocoloController");

router.post("/cadastrarProtocolo", (req, res) => protocoloController.cadastrar(req, res));

router.get("/listar", (req, res) => protocoloController.listar(req, res));

router.get("/contar-emagrecer", protocoloController.contarEmagrecer);

router.get("/contar-massa", protocoloController.contarMassa);

router.get("/contar-peso", protocoloController.contarPeso);

module.exports = router;
