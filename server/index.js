const http=require('http');

const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        res.end("Hi this is my first Server");
    }
    else if(req.url=='/about'){
        res.end("Hi this is About Page");
    }
    else{
        res.end("404: Page could not be found");
    }

 
})

server.listen(3000, ()=>{
    console.log("Server is Start port no 3000");
})