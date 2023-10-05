const express = require("express")
const {connection} = require("./Config/db")

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

app.listen(8080, async()=>{
    try{
        await connection
        console.log("Connected to the db")
    }catch(err){
        console.log("Trouble in connecting to db")
        console.log(err)
    }
    console.log("Running at 8080")
})