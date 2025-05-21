var express = require("express");
var router  = express.Router();
var protocoloController = require("../controllers/protocoloController");

router.post("/cadastrarProtocolo", (req, res) => protocoloController.cadastrar(req, res));

router.get("/listar", (req, res) => protocoloController.listar(req, res));

router.get("/buscar/:idTreino/:idDieta/:fkCliente",
    (req, res) => protocoloController.buscar(req, res)
);

module.exports = router;
