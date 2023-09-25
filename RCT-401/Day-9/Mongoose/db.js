const mongoose = require("mongoose")



const main = async ()=>{
    try{
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/school")
    console.log("connected to DBs")
    await studentModel.insertMany([{name:"Ankit",age:25,city:"Bangalore",is_married:false}])
    console.log("Added to DB")
    connection.disconnect()
    console.log("Disconnected")
} catch(err){
    console.log("Cannot connect")
    console.log(err)
}
}
main();

const studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    is_married:Boolean
},{
    versionKey:false
})
const studentModel = mongoose.model("student",studentSchema)