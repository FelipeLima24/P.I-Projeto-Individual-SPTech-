var express                  = require("express");
var router                   = express.Router();
var questionarioController = require("../controllers/questionarioController.js");

router.post("/criar", function(req, res) {
    questionarioController.criar(req, res);
});

router.get("/listar", function(req, res) {
    questionarioController.listar(req, res);
});

module.exports = router;