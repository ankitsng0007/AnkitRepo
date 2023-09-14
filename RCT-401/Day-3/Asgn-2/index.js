const fs = require("fs")

//fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//    if(err){
//        console.log("file cannot be read")
//        console.log(err)
//    } else {
 //       console.log(data)
 //   }
//})

let data;
try{
    data = fs.readFileSync("./lecture.txt",{encoding:"utf-8"})
    console.log(data);
} catch(err){
    console.log(err)
}

console.log("Bye Guys!!")