import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello");
});

router.get("/register", (req, res) => {
  res.status(200).send("Register here");
});

export default router;
