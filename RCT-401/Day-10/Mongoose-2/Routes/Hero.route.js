const express = require("express")
const {heroModel} = require("../Models/Hero.model")


const heroRouter = express.Router()


heroRouter.get("/heroes",async (req,res)=>{
    let query=req.query
    try{
     const heroes = await heroModel.find({query})
     res.send(heroes)
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

heroRouter.patch("/edithero/:id", async (req,res)=>{
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

heroRouter.delete("/edithero/:id", async (req,res)=>{
    const ID = req.params.id
    try{
        await heroModel.findByIdAndDelete({_id:ID})
        res.send(`Delete the hero data whose id is ${ID}`)
    }catch(err){
        console.log(err)
        console.log({"err":"Somthing went wrong"})
    }
})

heroRouter.post("/addhero",async (req,res)=>{
    const data = req.body
    const hero = new heroModel(data)
    await hero.save()
    console.log(hero)
    res.send("Added the Hero")
})

module.exports ={
    heroRouter
}