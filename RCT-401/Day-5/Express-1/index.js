const express = require("express")

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.end("Hello World")
})
app.get("/data",(req,res)=>{
    res.end("Data will be Entered")
})

app.post("/addData",(req,res)=>{
    console.log(req.body)
    res.end("Data has been recorded")
})

app.listen(3500,()=>{
    console.log("Running at the port 3500")
})