const addRoll = (req,res,next)=>{
    let roll = Math.random()*100
    req.body.roll_no = roll
    req.body.School = "Masai"
    next()
}
module.exports = {
    addRoll
}