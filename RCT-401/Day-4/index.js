const http = require("http");
const fs = require("fs");

const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("Home page")
    } else if(request.url==="/data"){
        fs.readFile("./data.json",(err,data)=>{
            if(err){
                response.write(err)
                response.end()
            }else{
                response.end(data)
            }
        })
    }else if(request.url === "/addDetail" && request.method ==="POST"){
         //someLogic to get the data
         let str="";
         request.on("data",(chunk)=>{
            str+=chunk
         })
         request.on("end",()=>{
            console.log(str)
         })
         response.end("Data has been entered")
    }
     else if(request.url==="/report"){
        response.setHeader("content-type","text/html")
        response.end("<h1>Reports<h1>")
    } else {
        response.end("Invalid End Point")
    }

})

server.listen(5050,()=>{
    console.log("The server is running at port 5050")
})