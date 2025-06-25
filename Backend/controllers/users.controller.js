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

