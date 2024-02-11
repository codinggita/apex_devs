import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 5000;

const DB = process.env.DB_URL;
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

// PROJECT DATA MODEL
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

// USER DATA MODEL
const ApexUserSchema = new mongoose.Schema({
  userId: { type: String, auto: true , unique: true}, // Unique ID (ObjectId)
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  aggrement: { type:String, require:true},
});

const ApexUserModel = mongoose.model("apexusersdata", ApexUserSchema);
const ProjectModel = mongoose.model("projectdata", ProjectCardSchema);

//  POST REQUEST : PROJECT UPLOAD 
app.post("/upload", async (req, res) => {
  try {

    const newProject = new ProjectModel(req.body);
    newProject.projectId = "PROJECT" + Date.now();
    const savedProject = await newProject.save();
    res.status(200).json(savedProject); // Send saved project in response

  } catch (error) {

    console.error("Error adding project:", error);
    res.status(500).json({ error: "Internal server error" });

  }
});

// GET REQUEST FOR PROJECT
app.get("/upload", async (req, res) => { // Changed route to /projects
  try {
    const projects = await ProjectModel.find({});
    res.status(201).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST REQUEST : SIGN UP
app.post("/register", async(req, res)=>{
  try{
  const newApexUser = new ApexUserModel(req.body);
  newApexUser.userId = "APEX" + Date.now();
  const savedApexUser = await newApexUser.save();
  res.status(200).json(savedApexUser);

  }catch(error){
    console.error("Error adding USER:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

// POST REQUEST : LOG IN 
app.post('/login', async(req, res)=>{
  const {username, password} = req.body;

  try{
    const user = await ApexUserModel.findOne({username, password})
    if(!user){
      return res.status(401).json({error: "INVALID CREDENTIALS"})
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY);
    res.status(200).json({ token });

  }catch(error){
    console.log("ERROR: ", error);
    res.status(500).json({message: "INTERNAL SERVER ERROR OCCURED", error})
  }

})



connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
});
