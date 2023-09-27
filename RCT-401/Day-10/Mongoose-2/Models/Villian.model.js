const mongoose = require("mongoose")

const villianSchema = mongoose.Schema({
    name:String,
    power:Number,
})

const villianModel = mongoose.model("hero",heroSchema)

module.exports = {
    villianModel
}