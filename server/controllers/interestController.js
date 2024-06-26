const asyncHandler = require("../middleware/asyncHandler.js");
const Interest = require("../models/interestModel.js");

const getInterests = asyncHandler(async (req, res) => {
  const interests = await Interest.find({});
  res.json(interests);
});

module.exports = { getInterests };
