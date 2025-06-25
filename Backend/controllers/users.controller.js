 const User= require ("../models/users.model");

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
            res.status(200).json({message:"User Found successfully",user})
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
            res.status(200).json({message:"Users fetched successfully",users})
        }
    } catch (error) {
        res.ststus(500).json ({message:"Something went wrong while fetching users",error})
    }
}

const updateUser= async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

