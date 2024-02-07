import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectCardSchema = new Schema({
  projectId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  date: {
    type: Date,
  },
  developerName: {
    type: String,
  },
  techUsed: {
    type: [String],
  },
});

const records = mongoose.model("projectdata", ProjectCardSchema);

export default records;
