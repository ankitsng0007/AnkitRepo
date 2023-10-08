const express = require("express")
const {NoteModel} = require("../models/Note.model")
const noteRouter = express.Router()


noteRouter.get("/",(req,res)=>{
    //verify Token
    res.send("All the Notes")
})

noteRouter.post("/create", async(req,res)=>{
    //verify token
    const payload = req.body
    try{
        const new_note = new NoteModel(payload)
        await new_note.save()
        res.send("Created the Note")
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})

noteRouter.patch("/update/:id",(req,res)=>{
    
    const payload = req.body
    res.send("Updated the Note")
})

noteRouter.delete("/delete/:id",(req,res)=>{
    //verify token
    const payload = req.body
    res.send("Deleted that Note")
})

module.exports = {
    noteRouter
}