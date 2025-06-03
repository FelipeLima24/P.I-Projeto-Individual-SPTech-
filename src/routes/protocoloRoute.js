var express = require("express");
var router  = express.Router();
var protocoloController = require("../controllers/protocoloController");

router.post("/cadastrarProtocolo", (req, res) => protocoloController.cadastrar(req, res));

router.get("/listar", (req, res) => protocoloController.listar(req, res));

<<<<<<< HEAD
router.get("/contar-emagrecer", protocoloController.contarEmagrecer);

router.get("/contar-massa", protocoloController.contarMassa);

router.get("/contar-peso", protocoloController.contarPeso);

=======
>>>>>>> 33ac66877ae88153f260da2b6e725a5ab8697e40
module.exports = router;
