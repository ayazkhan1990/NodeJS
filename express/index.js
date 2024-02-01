const express= require("express");
const app=express()

app.get('/', (req, res)=>{
    res.send("Hi This Express");
})
app.get('/about', (req, res)=>{
    res.send("Hi This About root");
})

app.listen(3000, ()=>{
    console.log("Server Start")
})