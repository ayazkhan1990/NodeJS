const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejsstudy').then(()=>{
    console.log("database connection successfull");
}).catch((e)=>{
console.log(e);
})

//======== Schema============
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    conpass:{
        type:String,
        required:true
    }
})
const user = mongoose.model("user",schema)
module.exports=user;