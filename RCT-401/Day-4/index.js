const http = require("http");

const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        response.end("This is Homepage")
    } else if(request.url === "/data"){
        response.end("Data will be here")
    }

})

server.listen(5050,()=>{
    console.log("The server is running at port 5050")
})