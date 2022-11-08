const express = require("express");
const router = express.Router();
const card_ctrl = require("../../Controllers/Card/CardControllers");

router.get("/", card_ctrl.helloWorld);
module.exports = router;
