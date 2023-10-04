const express = require("express")

const app = express()

app.post("/register",(req,res)=>{
    res.send("Registered")
})



app.listen(8080,()=>{
    console.log("Running at 8080")
})