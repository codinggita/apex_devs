import express from "express";
import bodyParser from "body-parser";
import profileRoutes from "./routes/profile.js"
import database from "./config/database.js"

const app = express();
const port = 3000;
app.use(bodyParser.json())
app.use(express.json())

database;

// GET PROFILE
app.use("/", profileRoutes)

// COMMUNITY
// app.use("/", communityRoutes );


// GET valid routes
app.get("/*", (req,res)=>{
    res.send("You are on wrong route. Select Valid route")
});


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});
