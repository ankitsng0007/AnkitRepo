const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://ankitsng:ankit@cluster0.yqt7jzv.mongodb.net/superheroes?retryWrites=true&w=majority")

const heroSchema = mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villian:String,
    language:String,
    is_active:Boolean
})

const heroModel = mongoose.model("hero",heroSchema)

module.exports = {
    connection,
    heroModel
}