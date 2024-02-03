const express= require("express");
const router=express.Router()

router.get("/", (req, res)=>{
    res.render("index", {title:"index"})
})
router.get("/home", (req, res)=>{
    res.render("home", {title:"home"})
})

module.exports=router;