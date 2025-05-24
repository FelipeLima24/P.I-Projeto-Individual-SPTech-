var express = require("express");              
var router  = express.Router();                  

var cadastroController = require("../controllers/cadastroController");

//  registro cadastro
router.post("/cadastrar", function(req, res) {
    cadastroController.cadastrar(req, res);
});


module.exports = router;                         