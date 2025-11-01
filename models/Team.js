import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true },
  teamCode: { type: String, required: true, unique: true },
  leader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  score: { type: Number, default: 0 },
  progress: {
    type: Map,
    of: {
      startedAt: { type: Date },
      submittedAt: { type: Date },
      submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      flag: { type: String }
    },
    default: {}
  }
});

export default mongoose.model("Team", teamSchema);
