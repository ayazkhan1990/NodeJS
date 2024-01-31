const http=require('http');
const fs=require('fs')

const server=http.createServer((req, res)=>{

    const jsondata=fs.readFileSync("api.json", "utf-8")
    const objdata=JSON.parse(jsondata)

    if(req.url=='/'){
        res.end("Hi this is my first Server");
    }
    else if(req.url=='/about'){
        res.end(objdata[1].phone);
    }
    else{
        res.end("404: Page could not be found");
    }

 
})

server.listen(3000, ()=>{
    console.log("Server is Start port no 3000");
})