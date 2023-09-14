const fs = require("fs")

fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log("file cannot be read")
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log("Bye Guys!!")