import express from "express";
// import mongoose from "mongoose";
const mongoose = require("mongoose");


const CONNECTION_URL = "mongodb://127.0.0.1/:8000/apexdevs";

mongoose.connect(CONNECTION_URL)
.then(()=>console.log("MongoDB Connected"))
.catch((err)=> console.log(err))

const Schema = mongoose.Schema()
const UserProfileSchema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
      },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    interests: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

const user1 = new UserProfile({
    username: "user1",
    email: "user1@example.com",
    dateOfBirth: new Date(1990, 6, 20),
    interests: ["coding", "hiking"],
  });

const user2 = new UserProfile({
    username: "user2",
    email: "user2@example.com",
    dateOfBirth: new Date(1985, 2, 15),
    interests: ["photography", "traveling"],
});

const user3 = new UserProfile({
    username: "user2",
    email: "user2@example.com",
    dateOfBirth: new Date(1985, 2, 15),
    interests: ["photography", "traveling"],
});

const addUsersToDB = async () => {
    try {
      await user1.save();
      console.log("User 1 added successfully!");
      await user2.save();
      console.log("User 2 added successfully!");
    } catch (error) {
      console.error("Error adding users:", error);
    }
  };
  addUsersToDB();