import express from "express";
import ExampleModel from '../models/userModels.js'
const router = express.Router();

// GET all profiles
router.get('/profile', async (req, res) => {
  try {
    const users = await ExampleModel.find();
    res.json({ message: "Users found", users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while retrieving users" });
  }
});

// GET specific user by name
// router.get('/profile/:userName', (req,res)=>{
//     const apexUser = profile.apexUsers.find( (c) => c.username === req.params.userName)
//     if(apexUser){
//         res.json({message: "USER FOUND", apexUser})
//     }else{
//         res.status(404).json({error: "User not found"})
//     }
// });

// // GET all projects of specific user
// router.get('/profile/:userName/projects', (req,res)=>{
//     const apexUser = profile.apexUsers.find((c)=>c.username===req.params.userName)
//     res.json({projects: apexUser.project})
// });

// // GET specific projectof specific user
// router.get('/profile/:userName/:projectId', (req,res)=>{
//     const apexUser = profile.apexUsers.find((user)=>user.username === req.params.userName);
//     if(apexUser){
//         const myProject = apexUser.project.find((p)=>p.projectId == req.params.projectId);
//         if(myProject){
//             res.json({myProject});
//         }else{
//             res.status(404).json({error: "Project not found"});
//         }
//     }else{
//         res.status(404).json({error: "User not found"});
//     }
// });

//------------------POST--------------------//

// POST new user
router.post('/profile', async (req, res) => {
    try {
      const newUser = await ExampleModel.create(req.body);
      res.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error while creating user" });
    }
  });
  

// // POST project to user profile
// router.post('/profile/:userName/projects', (req,res)=>{
//     const apexUser = profile.apexUsers.find((c) => c.username === req.params.userName);
//     console.log(apexUser)
//     if(apexUser){
//         apexUser.project.push(req.body);
//         res.send(`Project added to ${apexUser.name}`)
//     }else{
//         res.status(404).json({error: "User not found"})
//     }
// });

// // PATCH Updating user info
// router.patch("/profile/:userName",(req,res)=>{
//     const index = profile.apexUsers.findIndex(
//         (c)=>c.username===req.params.userName 
//     );
//     if (index === -1) {
//         console.log(`User with username ${userName} not found`);
//         res.status(404).send("User not found");
//         return;
//     }
//     profile.apexUsers[index] = {...profile.apexUsers[index], ...req.body};
//     console.log(`Profile updated for user ${req.params.userName}`);
//     res.send("Profile Updated");
// });

export default router;