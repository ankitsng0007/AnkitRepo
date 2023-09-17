const express = require("express")
const fs = require("fs")

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.end("Hello World")
})
app.get("/allData",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    console.log(data)
    res.send("You got data in terminal.")
})

app.listen(3500,()=>{
    console.log("Running at the port 3500")
})