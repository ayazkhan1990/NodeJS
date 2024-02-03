const express= require("express");
const middleware=require("./middleware")
const router=express.Router()
//router.use(middleware);// for all router

router.get("/",middleware, (req, res)=>{
    res.render("index", {title:"index"})
})
router.get("/home", (req, res)=>{
    res.render("home", {title:"home"})
})

module.exports=router;