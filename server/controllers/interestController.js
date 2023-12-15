const asyncHandler = require("../middleware/asyncHandler.js");
const Interest = require("../models/interestModel.js");

// @desc Fetch all interests
// @route Get /api/interests
// @access public
const getInterests = asyncHandler(async (req, res) => {
  const interests = await Interest.find({});
  res.json(interests);
});

module.exports = { getInterests };
