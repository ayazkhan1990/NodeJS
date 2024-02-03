const express= require("express");
const path=require("path")
const app=express()
const router=require("./router")



// const pathdir=path.join(__dirname,'public')  
// app.use(express.static(pathdir));

// app.get('/', (req, res)=>{
//     // res.sendFile(`${pathdir}/index.html`);  //direct html file
// })
// app.get('/home', (req, res)=>{
//     // res.sendFile(`${pathdir}/home.html`);   //direct html file
// })
// app.get('/download', (req, res)=>{
//     // res.download(`${pathdir}/home.html`);  //direct html file
// })
// app.get('/about', (req, res)=>{
//     res.send({
//     name: "Ayaz",
//     Age: 30
//     });
// })

// =================== 2nd way

app.set("view engine", "ejs");
app.use(router);



app.listen(3000, ()=>{
    console.log("Server Start")
})