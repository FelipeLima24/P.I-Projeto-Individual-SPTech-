var express = require("express");
var router  = express.Router();
var questionarioController = require("../controllers/questionarioController");

// POST /questionarios/criar
router.post("/criar", questionarioController.criar);



module.exports = router;