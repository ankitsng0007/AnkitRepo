const fs = require("fs")

const logger = (req,res,next)=>{
    fs.appendFileSync("../logs.txt",`\n Path:${req.url} Method:${req.method}`)
    next()
}

module.exports={
    logger
}