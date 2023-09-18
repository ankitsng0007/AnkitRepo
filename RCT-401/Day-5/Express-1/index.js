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

app.post("/addStudent",(req,res)=>{
    //reading the data first.
    const data = fs.readFileSync("./db.json","utf-8")
    //Parsing the data to add a new student
    const parsed_data = JSON.parse(data)
    //adding a new student
    parsed_data.student.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
    res.send("required Data Updated")
})
app.post("/addTeacher",(req,res)=>{
    //reading the data first.
    const data = fs.readFileSync("./db.json","utf-8")
    //Parsing the data to add a new teacher
    const parsed_data = JSON.parse(data)
    //adding a new teacher
    parsed_data.teacher.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data))
    res.send("required Data Updated")
})

app.delete("/deleteStudent",(req,res)=>{

})

app.listen(3500,()=>{
    console.log("Running at the port 3500")
})