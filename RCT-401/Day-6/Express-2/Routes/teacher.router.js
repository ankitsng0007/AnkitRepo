const express = require("express")
const teacherRouter = express.Router()

teacherRouter.get("/",(req,res)=>{
    res.send("All Teachers")
})

teacherRouter.post("/addTeacher",(req,res)=>{
    console.log(req.body)
    res.send("Added Teacher")
})

module.exports={
    teacherRouter
}