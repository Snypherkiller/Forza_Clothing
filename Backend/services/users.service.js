const mongoose = require("mongoose");
const User = require("../models/users.model");

const addUser = async (data)=>{
    const {email}=data;
    if (!email.includes("@")){
        throw new Error("Invalid Email format!");
    }
    
    const user = new User(req.body);
     
}

const getUserById= async (req,res)=>{
    
}