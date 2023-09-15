const http = require("http");

const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("Homepage")
    } else if(request.url==="/data"){
        response.end("Data will be here")
    } else if(request.url==="/report"){
        response.end("Reports")
    } else {
        response.end("Invalid End Point")
    }

})

server.listen(5050,()=>{
    console.log("The server is running at port 5050")
})