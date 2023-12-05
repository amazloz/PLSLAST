import mongoose from "mongoose";

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

export default Language;
