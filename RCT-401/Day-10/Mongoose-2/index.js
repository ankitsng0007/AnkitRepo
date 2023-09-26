const express = require("express")
const {connection} = require("./db")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wellcome")
})

app.get("/heros",(req,res)=>{
    res.send("data of all the super heros")
})

app.post("/addhero",(req,res)=>{
    const data = req.body
    console.log(data)
    res.send("Added the Hero")
})
app.listen(4500,async ()=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log("Error while connecting to db")
        console.log(err)
    }
    console.log("server is running on the port 4500")
})