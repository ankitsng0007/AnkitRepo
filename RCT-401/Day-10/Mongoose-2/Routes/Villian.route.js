const express = require("express")
const {villianModel} = require("../Models/Villian.model")

const villianRouter = express.Router()

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