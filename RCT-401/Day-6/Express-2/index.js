const express = require("express")
const fs = require("fs")

const app = express()
//app.use(middleware)

const timeLogger = (req,res,next)=>{
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    console.log(endTime-startTime)
}
    
    app.use(timeLogger)

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
    const data = fs.readFileSync("./dummy.txt","utf-8")
    res.send(data)
})

app.listen(4500,()=>{
    console.log("Running at port 4500")
})