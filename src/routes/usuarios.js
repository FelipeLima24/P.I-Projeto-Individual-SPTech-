var express = require("express");              
var router  = express.Router();                  

var usuarioController = require("../controllers/usuarioController");

//  registro usuario
router.post("/cadastrar", function(req, res) {
    usuarioController.cadastrar(req, res);
});

// caso queira rota de login, descomente:
// router.post("/autenticar", (req, res) => usuarioController.autenticar(req, res));

module.exports = router;                         