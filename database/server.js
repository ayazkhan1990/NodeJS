const express=require('express');
const app=express();
const user = require("./connection");

app.listen('4000', ()=>{
    console.log("4000 server start");
})