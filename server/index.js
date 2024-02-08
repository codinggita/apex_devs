import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

const router = express(); // Changed from express()
const PORT = 5000;
const DB = "mongodb://localhost:27017/apexdevs";
router.use(bodyParser.json());
router.use(cors())
// const server = http.createServer(router);


// DATABASE CONNECTION
const connectDb = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connection successful to DB");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

// DATA MODEL
const ProjectCardSchema = new mongoose.Schema({
  projectId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagelink: {type: String},
  rating: { type: Number },
  date: { type: Date },
  developerName: { type: String },
  technologiesUsed: { type: String },
});

const ProjectModel = mongoose.model("projectdata", ProjectCardSchema);

// POST REQUEST
router.post("/upload", async (req, res) => {
  try {
    const newProject = new ProjectModel(req.body); // Changed from ProjectModel.create(req.body)
    newProject.projectId = "PROJECT" + Date.now();
    const savedProject = await newProject.save();
    res.status(200).json(savedProject); // Send saved project in response
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET REQUEST
router.get("/upload", async (req, res) => { // Changed route to /projects
  try {
    const projects = await ProjectModel.find({});
    res.status(201).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


connectDb().then(() => {
  router.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
});
