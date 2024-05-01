const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  note_title: {
    type: String,
    required: false,
  },
  note_content: {
    type: String,
    required: false,
  },
});
const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
