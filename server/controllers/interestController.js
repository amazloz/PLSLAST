import asyncHandler from "../middleware/asyncHandler.js";
import Interest from "../models/interestModel.js";

// @desc Fetch all interests
// @route Get /api/interests
// @access public
const getInterests = asyncHandler(async (req, res) => {
  const interests = await Interest.find({});
  res.json(interests);
});

export { getInterests };
