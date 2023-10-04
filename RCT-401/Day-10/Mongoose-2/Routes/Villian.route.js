const express = require("express")
const {villianModel} = require("../Models/Villian.model")

const villianRouter = express.Router()

villianRouter.get("/villians",async (req,res)=>{
    let query=req.query
    try{
     const villians = await villianModel.find({query})
     res.send(villians)
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

villianRouter.post("/addvillian",async (req,res)=>{
    const data = req.body
    const villian = new villianModel(data)
    await villian.save()
    console.log(villian)
    res.send("Added the Villian")
})

module.exports = {
    villianRouter
}