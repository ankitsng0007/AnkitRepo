const express = require("express")

const studentRouter = express.Router()

studentRouter.get("/students",(req,res)=>{
    res.send("All Students")
})

studentRouter.post("/addStudent",(req,res)=>{
    console.log(req.body)
    res.send("Student Added")
})

module.exports={
    studentRouter
    
}