function agedetector(req, res, next) {
    if(req.query.age>18){
        next()
        res.send("Welcome your are enter");
    }else{
        res.send("You can't access");
    }
}
module.exports=agedetector;