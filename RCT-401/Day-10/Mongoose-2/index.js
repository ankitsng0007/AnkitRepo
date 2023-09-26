const express = require("express")
const {connection,heroModel} = require("./db")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wellcome")
})

app.get("/heros",(req,res)=>{
    res.send("data of all the super heros")
})

app.get("/heroes",async (req,res)=>{
    let query=req.query
    try{
     const heroes = await heroModel.find({query})
     res.send(heroes)
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

app.patch("/edithero/:id", async (req,res)=>{
    const ID = req.params.id
    const payload = req.body
    try{
        await heroModel.findByIdAndUpdate({_id:ID},payload)
        res.send(`Update the hero data whose id is ${ID}`)
    }catch(err){
        console.log(err)
        console.log({"err":"Somthing went wrong"})
    }
})

app.delete("/edithero/:id", async (req,res)=>{
    const ID = req.params.id
    try{
        await heroModel.findByIdAndDelete({_id:ID})
        res.send(`Delete the hero data whose id is ${ID}`)
    }catch(err){
        console.log(err)
        console.log({"err":"Somthing went wrong"})
    }
})
app.post("/addhero",async (req,res)=>{
    const data = req.body
    const hero = new heroModel(data)
    await hero.save()
    console.log(hero)
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