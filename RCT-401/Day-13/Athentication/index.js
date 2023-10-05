const express = require("express")
const {connection} = require("./configs/db")
const {UserModel} = require("./models/User.model")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Wellcome")
})
app.post("/register",async(req,res)=>{
    const payload = req.body
    try{
         const user = new UserModel(payload)
         await user.save()
         res.send("Registered")
    }catch(err){
        res.send("Error in Registering the user")
        console.log(err)
    }
})

app.post("/login",async(req,res)=>{
    const {email,pass} = req.body
    try{
        const user = await UserModel.find({email,pass})
        const token = jwt.sign({course:"Backend"},"masai")
        if(user.length>0){
        res.send({"msg":"Log In Sucessfull","Token":token})
        }else{
            res.send("Wrong Credentials")
        }
    }catch(err){
        res,send("Something went Wrong")
        console.log(err)
    }
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})
app.get("/data",(req,res)=>{
    const token = req.headers.authorization;
    jwt.verify(token, "masai", (err,decoded)=>{
        if(err){
            res.send("Invalid Token")
            console.log(err)
        }else{
            res.send("Data...")
        }
    });
})
app.get("/cart",(req,res)=>{
    const token = req.query.token;
    jwt.verify(token, "masai", (err,decoded)=>{
        if(err){
            res.send("Invalid Token")
            console.log(err)
        }else{
            res.send("Cart Page")
        }
    });
})

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