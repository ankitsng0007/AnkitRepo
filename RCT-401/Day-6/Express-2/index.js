const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Wellcome Page")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})
app.get("/contact",(req,res)=>{
    res.send("Contact Page")
})
app.get("/data",(req,res)=>{
    res.send("Data will be sent")
})

app.listen(4500,()=>{
    console.log("Running at port 4500")
})