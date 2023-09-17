const express = require("express")
const fs = require("fs")

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.end("Hello World")
})
app.get("/allData",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    const parsed_data = JSON.parse(data)
    console.log(parsed_data)
    res.send(parsed_data)
})
app.get("/allStudent",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8")
    const parsed_data = JSON.parse(data)
    console.log(parsed_data.student)
    res.send(parsed_data.student)
})

app.listen(3500,()=>{
    console.log("Running at the port 3500")
})