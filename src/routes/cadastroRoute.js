var express = require("express");              
var router  = express.Router();                  

var varController = require("../controllers/cadastroController");

//  registro usuario
router.post("/cadastrar", function(req, res) {
    varController.cadastrar(req, res);
});



module.exports = router;                         