const mongoose = require("mongoose")



const main = ()=>{
    const connection = mongoose.connect("mongodb://127.0.0.1:27017/")
    console.log("connected to DBs")
}
main();