const mongoose = require ("mongoose")

const userSchema= new mongoose.Schema({
    name :{ type:String , require:true},
    userName:{type:String,require:true,unique:true},
    role:{ type:String , require:true,enum:["admin","user"]},
    email:{ type:String , require:true},
    address:{ type:String},
    phoneNumber:{ type:String },
    password: {type:String , require:true}
})

const User=mongoose.model("user",userSchema)
module.exports =User;
