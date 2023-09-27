const express = require("express")
const {connection} = require("./db")
require("dotenv").config()

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wellcome")
})

app.get("/heros",(req,res)=>{
    res.send("data of all the super heros")
})


app.listen(process.env.port,async ()=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log("Error while connecting to db")
        console.log(err)
    }
    console.log(`Server is running at port ${process.env.port}`)
})