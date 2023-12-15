const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  language_code: {
    type: String,
    required: true,
  },
  language_name: {
    type: String,
    required: true,
  },
});
const Language = mongoose.model("Language", languageSchema);

module.exports = Language;
