import express from "express"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
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

app.get('/account', (req,res)=>{
    res.send("Welcome to your profile")
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


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})