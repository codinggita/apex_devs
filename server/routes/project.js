import express from "express";
import records from "../models/projectModel.js";

const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const cardData = await ProjectModel.find();
//     res.json({ message: "Project Data Found!" }, cardData);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error while retrieving users" });
//   }
//});

router.get("/project", async (req, res) => {
  try {
    const cardData = await records.find();
    res.json({ message: "Project Data Found!" }, cardData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while retrieving users" });
  }
});

router.post("/project", async (req, res) => {
    try {
      console.log(req.body);
      const newProjectData = await records.create(req.body);
      res.status(201).json({ message: "Project added successfully", newProjectData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error while adding project" });
    }
  });

  export default router