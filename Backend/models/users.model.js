const mongoose = require ("mongoose")

const userSchema= new mongoose.Schema({
    name :{ type:String , require:true},
    email:{ type:String , require:true},
    address:{ type:String},
    phoneNumber:{ type:String },
    password: {type:String , require:true}
})

const User=mongoose.Schema("user",userSchema)
module.exports =User;
