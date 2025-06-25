 const userService=require("../services/users.service");
 const express =require ("express");
 const mongoose= require("mongoose");

 const addUser = async (req,res)=>{
    try {
        const user= await userService.Create(req.body)
        res.status(201).json({message:"User added successfully",user});
     }catch (error) {
        res.status(500).json({message:"Something wrong with adding user",error})
    }
}


const getUserById = async (req,res)=>{
    try {
        const user=await userService.findById(req.params.id);
        res.status(200).json({message:"User Found successfully",user})
        
    } catch (error) {
        res.status(500).json({message:"There is some error while fetching user",error})
    }
}

const getAllUsers =async (req,res)=>{
    try {
        const users=await userService.find();
        res.status(200).json({message:"Users fetched successfully",users})
        
    } catch (error) {
        res.ststus(500).json ({message:"Something went wrong while fetching users",error})
    }
}

const updateUser= async(req,res)=>{
    try {
        const user= await userService.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({ message: "User updated successfully!", user });
            
    } catch (error) {
        res.status(500).json({message:"Something went wrong while updating the user!",error})
    }
}

const deleteUser=async (req,res)=>{
    try {
        const user = await userService.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"User deleted successfully!"})
    } catch (error) {
        
    }
}

module.exports={addUser,getUserById,getAllUsers,updateUser,deleteUser};

