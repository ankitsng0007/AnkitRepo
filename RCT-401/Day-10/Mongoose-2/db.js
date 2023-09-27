const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.mongoURL)

const heroSchema = mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villian:String,
    language:String,
    is_active:Boolean
})

const heroModel = mongoose.model("hero",heroSchema)

const villianSchema = mongoose.Schema({
    name:String,
    power:Number,
})

const villianModel = mongoose.model("hero",heroSchema)

module.exports = {
    connection,
    heroModel
}