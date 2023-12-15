const express = require("express");
const router = express.Router();
const { getLanguages } = require("../controllers/languageController.js");

router.route("/").get(getLanguages);

module.exports = router;
