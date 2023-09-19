//Student Management System

const express = require("express")
const {studentRouter} = require("./Routes/student.router")
const {teacherRouter} = require("./Routes/teacher.router")

const app = express()

//app.use(express.json())
app.use("/students",studentRouter)
app.use("/teachers",teacherRouter)

//app.use(middleware)
//app.use(timeLogger)
//app.use(watchman)
//app.use(logger)
//app.use(addRoll)


app.get("/",(req,res)=>{
    res.send("Wellcome Page")
})

app.get("/data",(req,res)=>{
    const data = fs.readFileSync("./dummy.txt","utf-8")
    res.send(data)
})

app.listen(4500,()=>{
    console.log("Running at port 4500")
})