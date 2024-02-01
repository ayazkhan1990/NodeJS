const express= require("express");
const path=require("path")
const app=express()

const pathdir=path.join(__dirname,'public')
// app.use(express.static(pathdir));

app.get('/', (req, res)=>{
    res.sendFile(`${pathdir}/index.html`);
})
app.get('/home', (req, res)=>{
    res.sendFile(`${pathdir}/home.html`);
})
app.get('/download', (req, res)=>{
    res.download(`${pathdir}/home.html`);
})
app.get('/about', (req, res)=>{
    res.send({
    name: "Ayaz",
    Age: 30
    });
})

app.listen(3000, ()=>{
    console.log("Server Start")
})