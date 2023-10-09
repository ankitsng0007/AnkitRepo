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

noteRouter.patch("/update/:id", async(req,res)=>{
    const payload = req.body
    const id = req.params.id
    const note = await NoteModel.findOne({"_id":id})
    const userId_in_note = note.userId
    const userId_making_req = req.body.userId

    try{
        if(userId_making_req !== userId_in_note){
            res.send({"msg":"You are not authorized"})
        }else{
            await NoteModel.findByIdAndUpdate({"_id":id},payload)
            res.send("Updated the Note")
        }
    }catch(err){
        console.log(err)
        res.send({"msg":"Something Went wrong"})
    }
})

noteRouter.delete("/delete/:id", async(req,res)=>{
    const id = req.params.id
    try{
        await NoteModel.findByIdAndDelete({"_id":id})
        res.send("Deleted that Note")
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})

module.exports = {
    noteRouter
}