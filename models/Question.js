import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  flag: { type: String, required: true },
});

export default mongoose.model("Question", questionSchema);