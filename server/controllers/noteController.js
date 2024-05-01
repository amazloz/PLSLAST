const asyncHandler = require("../middleware/asyncHandler.js");
const Note = require("../models/noteModel.js");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({});
  res.json(notes);
});

module.exports = { getNotes };
