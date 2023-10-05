const express = require("express")
const {connection} = require("./Config/db")
const { userModel } = require("./Models/user.model")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wellcome")
})

app.post("/register", async(req,res)=>{
    const payload = req.body
    try{
        const user = new userModel(payload)
        await user.save()
        res.send("Registered")
    }catch(err){
        res.send("Eror in Registering the user")
        console.log(err)
    }
})

app.post("/login", async(req,res)=>{
    const {email,pass} = req.body
    try{
        const user = await userModel.find({email,pass})
        console.log(user)
        res.send("Working on it")
    }catch(err){
        res.send("Something Went Wrong")
        console.log(err)
    }
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