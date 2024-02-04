const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejsstudy').then(()=>{
    console.log("database connection successfull");
}).catch((e)=>{
console.log(e);
})

//======== Schema============
const schema=new mongoose.Schema({
    name:String
})
const user = mongoose.model("user",schema)
module.exports=user;