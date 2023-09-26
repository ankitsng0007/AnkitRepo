const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Wellcome")
})

app.get("/heros",(req,res)=>{
    res.send("data of all the super heros")
})

app.listen(4500,()=>{
    console.log("server is running on the port 4500")
})