import mongoose from "mongoose";
// import config from "./config_file";

const CONNECTION_URL =
  "mongodb+srv://apexdev:temppass@apexcluster.jwousrz.mongodb.net/ ?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if the database connection fails
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

export default mongoose;
