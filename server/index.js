import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import router from './router/auth-router.js'



const app = express(); 
const PORT = process.env.PORT || 5000;

const DB = `mongodb+srv://apexdev:temppass@apexcluster.oxekarx.mongodb.net/?retryWrites=true&w=majority`;
app.use(bodyParser.json());
app.use(cors())

// app.use('/api/auth',router)

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
  technologiesUsed: { type: [String]  },
});

const ProjectModel = mongoose.model("projectdata", ProjectCardSchema);

// POST REQUEST
app.post("/upload", async (req, res) => {
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
app.get("/upload", async (req, res) => { // Changed route to /projects
  try {
    const projects = await ProjectModel.find({});
    res.status(201).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
});
