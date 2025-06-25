const mongoose = require("mongoose");
const User = require("../models/users.model");

const addUser = async (data)=>{
    const {email}=data;
    if (!email.includes("@")){
        throw new Error("Invalid Email format!");
    }
    
    const user = new User(data);
    return await user.save();
     
}

const getUserById= async (id)=>{
    const user = await User.findById(id);
    if(!user){
        const error= new Error("User not found!");
        error.status=404;
        throw error
        
    }
    return user;

}

const getAllUsers= async ()=>{
    const users= await User.find();
    if(!users & users.length ===0){
        const error=new Error("Usres are not found!");
        error.status=404;
        throw error;
    }
    return users;
}
const updateUser = async(id,data)=>{
    const user= await User.findByIdAndUpdate(id,data ,{new:true});
    if(!user){
        const error=new Error("Users not found!");
        error.status=404;
        throw error;


    }
    return user;
}

const deleteUser = async (id)=>{
    const user = await User.findByidAnddelete(id);
    if(!user){
        return res.ststus(404).json({message:"User not found"});
    }
    
}

module.exports={addUser,getAllUsers,getUserById,updateUser,deleteUser};