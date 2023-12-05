import asyncHandler from "../middleware/asyncHandler.js";
import Language from "../models/languageModel.js";

// @desc Fetch all interests
// @route Get /api/interests
// @access public
const getLanguages = asyncHandler(async (req, res) => {
  const languages = await Language.find({});
  res.json(languages);
});

export { getLanguages };
