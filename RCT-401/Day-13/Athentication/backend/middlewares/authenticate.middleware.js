const jwt = require("jsonwebtoken")

const authenticate = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token,"masai")
        if(decoded){
            const userId = decoded.userId
            console.log(decoded)
            req.body.userId = userId
            next()
        }else{
            res.send("Please Login First")
        }
    }else{
        res.send("Please Login First")
    }
}

module.exports = {
    authenticate
}