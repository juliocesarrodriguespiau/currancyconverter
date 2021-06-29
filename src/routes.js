const { Router } = require("express");

const convert = require("./controller");

const router = Router();

router.get("/convert/:from/:to/:amount", convert.converter)

module.exports = router;


