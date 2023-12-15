const express = require("express");
const router = express.Router();
const { getInterests } = require("../controllers/interestController.js");

router.route("/").get(getInterests);

module.exports = router;
