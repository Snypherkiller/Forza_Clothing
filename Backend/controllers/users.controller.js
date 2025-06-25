 const User= require ("../models/users.model");
 const mongoose= require("mongoose");

 const addUser = async (req,res)=>{
    try {
        const user= await User.Create(req.body)
        res.status(201).json({message:"User added successfully",user});
     }catch (error) {
        res.status(500).json({message:"Something wrong with adding user",error})
    }
}


const getUserById = async (req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        else{
            return res.status(200).json({message:"User Found successfully",user})
        }
    } catch (error) {
        res.status(500).json({message:"There is some error while fetching user",error})
    }
}

const getAllUsers =async (req,res)=>{
    try {
        const users=await User.find();
        if(!users || users.length === 0){
            return res.status(404).json({message:"No users found"})
        }
        else{
            return res.status(200).json({message:"Users fetched successfully",users})
        }
    } catch (error) {
        res.ststus(500).json ({message:"Something went wrong while fetching users",error})
    }
}

const updateUser= async(req,res)=>{
    try {
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){
          return res.status(404).json({message:"User not found!"});  
        }
        else{
            return res
              .status(200)
              .json({ message: "User updated successfully!", user });
            }
    } catch (error) {
        res.status(500).json({message:"Something went wrong while updating the user!",error})
    }
}

const deleteUser=async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).json({message:"There is no User exist!"})
        }
        else{
            return res.status(200).json({message:"User deleted successfully!"})
        }
    } catch (error) {
        
    }
}

module.exports={addUser,getUserById,getAllUsers,updateUser,deleteUser};

