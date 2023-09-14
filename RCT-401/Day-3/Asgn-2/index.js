const fs = require("fs")

//fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//    if(err){
//        console.log("file cannot be read")
//        console.log(err)
//    } else {
 //       console.log(data)
 //   }
//})

//let data;
//try{
//    data = fs.readFileSync("./lecture.txt",{encoding:"utf-8"})
//    console.log(data);
//} catch(err){
//    console.log(err)
//}

//fs.writeFile("./lecture.txt","This is my first project",(err)=>{
//    if(err){
//        console.log("cannot write in the file")
//        console.log(err)
//    } else {
 //       console.log("Data has been written")
 //   }
//})

//try{
//    fs.writeFileSync("./leture.txt","This is my second project")
//    console.log("Data has been entered")
//} catch(err){
//    console.log(err)
//}

fs.appendFile("./lecture.txt","\nThis is my third Project\n",(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("Appended")
    }
})
console.log("Bye Guys!!")