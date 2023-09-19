const express = require("express")

const studentRouter = express.Router()

studentRouter.get("/students",(req,res)=>{
    res.send("All Students")
})