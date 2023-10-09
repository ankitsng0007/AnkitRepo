const express = require("express")
const {UserModel} = require("../models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userRouter = express.Router()

userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,age} = req.body
    try{
        bcrypt.hash(pass, 5, async(err,secure_password)=>{
            if(err){
                console.log(err)
            }else{
                const user = new UserModel({name,email,pass:secure_password,age})
                await user.save()
                res.send("Registered")
            }
        })
    }catch(err){
        res.send("Error in Registering the user")
        console.log(err)
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass} = req.body
    try{
        const user = await UserModel.find({email})
        const hash_pass = user[0].pass
        if(user.length>0){
            bcrypt.compare(pass, hash_pass, (err, result)=>{
                if(result){
                    const token = jwt.sign({userId:user[0]._id},"masai")
                    res.send({"msg":"Log In Sucessfull","Token":token})
                }else{
                    res.send("Wrong Credentials")
                }
            });
        }else{
            res.send("Wrong Credentials")
        }
    }catch(err){
        res,send("Something went Wrong")
        console.log(err)
    }
})

userRouter.get("/about",(req,res)=>{
    res.send("About Page")
})
userRouter.get("/data",(req,res)=>{
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
userRouter.get("/cart",(req,res)=>{
    const token = req.headers.authorization;
    jwt.verify(token, "masai", (err,decoded)=>{
        if(err){
            res.send("Invalid Token")
            console.log(err)
        }else{
            res.send("Cart Page")
        }
    });
})

module.exports = {
    userRouter
}