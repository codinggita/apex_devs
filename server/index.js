import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const Data = {
    cse:[{
        id: 1,
        user : "stupid"
    }]
}

app.use(bodyParser.json())

app.post('/account', (req, res)=>{
    const add = 
    res.send({message:"New User Join Apex Community", newApex});
})

app.get('/account/:id', (req,res)=>{
    const apexDev = req.params.id
    console.log(`Hi ${apexDev}, Welcome to your profile`)
})

app.get('/account_projects', (req,res)=>{
    res.send("Pojects of user")
})

app.get('/account_setting', (req,res)=>{
    res.send("Setting of your profile")
})

app.get('/account_help', (req,res)=>{
    res.send("Ask for help")
})

app.get('/', (req, res) => {
    const userApex = req.params.id;
    res.send(`Hello ${userApex}, Welcome to ApexDevs`);
});

app.get('/explore', (req,res)=>{
    res.send("List of projects to explore")
})

app.get('/community', (req,res)=>{
    res.send("This is community")
})

app.get('/community/explore', (req,res)=>{
    res.send("Search for devs")
})

app.get('/community/discuss', (req,res)=>{
    res.send("This is faq section")
})


app.get('/categories', (req,res)=>{
    res.send("This is selecto from categories")
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})