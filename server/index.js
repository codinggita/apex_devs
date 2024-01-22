import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Middleware to parse JSON in request
app.use(bodyParser.json())
app.use(express.json())

// Database
const profile = {
    apexUsers:[
        {
            apexId: "1",
            name: "Mern User",
            username: "noobuser",
            bio: "cse student learning mern stack",
            thread:[
                {
                    title:"I need help in game project made in C++",
                }
            ],
            project:[
                {
                    projectId: 1,
                    title: "Swiggy Clone",
                    description: "This is clone for swiggy app",
                    date: "22-01-2024",
                    time: "11:23",
                    rating: "88%",
                    img: [ "img1.jpg", "img2.jpg" ],
                    likes: "12",
                    dislikes: "4",
                    link: "url",
                    tags:["data"]
                },,
                {
                    projectId: 2,
                    title: "Genius Code Editor",
                    description: "A versatile code editor designed for developers",
                    date: "05-11-2022",
                    time: "18:12",
                    rating: "96%",
                    img: [ "img5.jpg", "img6.jpg" ],
                    likes: 150,
                    dislikes: 2,
                    link: "geniuscodeeditor.com",
                    tags:["ios"]
                }
            ]    
        },
        {
            apexId: "2",
            name: "Supercell",
            username: "oldsuperuser",
            bio: "cse student learning android games",
            thread:[
                {title:"I need someone to help in me in my android project",
                }
            ],
            project:[
                {
                    projectId: 1,
                    title: "Clash of Clans",
                    description: "A strategy game developed by supercell",
                    date: "20-09-2021",
                    time: "15:23",
                    rating: "98%",
                    img: [ "img1.jpg", "img2.jpg" ],
                    likes: 120,
                    dislikes: 3,
                    link: "coc.com",
                    tags:["web", "html", "css"]
                },
                {
                    projectId: 2,
                    title: "Binary Adventure",
                    description: "An action-packed adventure game with stunning graphics",
                    date: "12-05-2022",
                    time: "10:45",
                    rating: "94%",
                    img: [ "img3.jpg", "img4.jpg" ],
                    likes: 85,
                    dislikes: 5,
                    link: "binaryadventure.com",
                    tags:["android", "java"]
                }
            ]    
        }
    ]
}


//--------------------GET------------------------//

// GET all profiles
app.get('/profile', (req,res)=>{
    res.json(profile.apexUsers);
});

// GET specific user by name
app.get('/profile/:userName', (req,res)=>{
    const apexUser = profile.apexUsers.find( (c) => c.username === req.params.userName)
    if(apexUser){
        res.json({message: "USER FOUND", apexUser})
    }else{
        res.status(404).json({error: "User not found"})
    }
});

// GET all projects of specific user
app.get('/profile/:userName/projects', (req,res)=>{
    const apexUser = profile.apexUsers.find((c)=>c.username===req.params.userName)
    res.json({projects: apexUser.project})
});

// GET specific projectof specific user
app.get('/profile/:userName/:projectId', (req,res)=>{
    const apexUser = profile.apexUsers.find((user)=>user.username === req.params.userName);
    if(apexUser){
        const myProject = apexUser.project.find((p)=>p.projectId == req.params.projectId);
        if(myProject){
            res.json({myProject});
        }else{
            res.status(404).json({error: "Project not found"});
        }
    }else{
        res.status(404).json({error: "User not found"});
    }
});

//------------------POST--------------------//

// POST new user
app.post('/profile', (req, res)=>{
    profile.apexUsers.push(req.body);
    res.send("New user added")
});

// POST project to user profile
app.post('/profile/:userName/projects', (req,res)=>{
    const apexUser = profile.apexUsers.find((c) => c.username === req.params.userName);
    console.log(apexUser)
    if(apexUser){
        apexUser.project.push(req.body);
        res.send(`Project added to ${apexUser.name}`)
    }else{
        res.status(404).json({error: "User not found"})
    }
});

// PATCH Updating user info
app.patch("/profile/:userName",(req,res)=>{
    const index = profile.apexUsers.findIndex(
        (c)=>c.username===req.params.userName 
    );
    if (index === -1) {
        console.log(`User with username ${userName} not found`);
        res.status(404).send("User not found");
        return;
    }
    profile.apexUsers[index] = {...profile.apexUsers[index], ...req.body};
    console.log(`Profile updated for user ${req.params.userName}`);
    res.send("Profile Updated");
});

// GET valid routes
app.get("/*", (req,res)=>{
    res.send("You are on wrong route. Select Valid route")
});

//----------------Community---------------//
app.post('/community/threads', (req,res)=>{
    const allThreads = profile.apexUsers.flatMap(user => user.thread);
    res.json({ threads: allThreads });
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});
