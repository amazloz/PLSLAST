const express = require("express");
const router = express.Router();
const { getNotes } = require("../controllers/noteController.js");

router.route("/").get(getNotes);

module.exports = router;
