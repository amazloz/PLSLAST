const asyncHandler = require("../middleware/asyncHandler.js");
const Language = require("../models/languageModel.js");

// @desc Fetch all interests
// @route Get /api/interests
// @access public
const getLanguages = asyncHandler(async (req, res) => {
  const languages = await Language.find({});
  res.json(languages);
});

module.exports = { getLanguages };
