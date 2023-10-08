const express = require("express")
const {connection} = require("./configs/db")
const {userRouter} = require("./routes/User.routes")
const {noteRouter} = require("./routes/Note.route")
const {authenticate} = require("./middlewares/authenticate.middleware")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wellcome")
})
app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }catch(err){
        console.log("Trouble in Connecting to DB")
        console.log(err)
    }
    console.log("Running at 8080")
})