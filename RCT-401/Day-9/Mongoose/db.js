const mongoose = require("mongoose")



const main = async ()=>{
    try{
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/school")
    console.log("connected to DBs")
    //await studentModel.insertMany([{name:"Ankit",age:25,city:"Bangalore",is_married:false}])
    const student = new studentModel({
        name:"Priya",
        age:22,
        city:"Delhi",
        is_married:true
    })
    await student.save()
    console.log("Added to DB")
   //console.log("Following are the student from database")
   //const students = await studentModel.find()
  // console.log(students)
    connection.disconnect()
    console.log("Disconnected")
} catch(err){
    console.log("Cannot connect")
    console.log(err)
}
}
main();

const studentSchema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    is_married:{type:Boolean,required:true}
},{
    versionKey:false
})
const studentModel = mongoose.model("student",studentSchema)