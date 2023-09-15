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
    } else if(request.url==="/report"){
        response.end("Reports")
    } else {
        response.end("Invalid End Point")
    }

})

server.listen(5050,()=>{
    console.log("The server is running at port 5050")
})