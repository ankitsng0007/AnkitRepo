const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Wellcome")
})

app.post("/register",(req,res)=>{
    res.send("Registered")
})

app.post("/login",(req,res)=>{
    res.send("Logged In")
})

app.listen(8080,()=>{
    console.log("Running at 8080")
})