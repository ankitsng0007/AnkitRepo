const fs = require("fs")

const logger = (req,res,next)=>{
    fs.appendFileSync("../logs.txt",`Route:${req.url} Method:${req.method}\n`)
    next()
}

module.exports={
    logger
}