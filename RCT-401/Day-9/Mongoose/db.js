const mongoose = require("mongoose")



const main = async ()=>{
    try{
    const connection = mongoose.connect("mongodb://127.0.0.1:27017/")
    console.log("connected to DBs")
} catch(err){
    console.log("Cannot connect")
    console.log(err)
}
}
main();