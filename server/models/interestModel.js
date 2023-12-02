import mongoose from "mongoose";

const interestSchema = new mongoose.Schema({
  interest_id: {
    type: String,
    required: true,
  },
  interest_name: {
    type: String,
    required: true,
  },
});
const Interest = mongoose.model("Interest", interestSchema);

export default Interest;
