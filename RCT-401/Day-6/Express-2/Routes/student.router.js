const express = require("express")

const studentRouter = express.Router()

studentRouter.get("/",(req,res)=>{
    res.send("All Students")
})

studentRouter.post("/addstudent",(req,res)=>{
    console.log(req.body)
    res.send("Student Added")
})

module.exports={
    studentRouter

}