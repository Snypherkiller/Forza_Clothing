const Clothes =require ("../models/clothes.model");
const User = require("../models/users.model");


const addCloth = async (data)=> {
    const cloth = new Clothes(data);
    return await cloth.save();
}

const getClothByName = async (name)=> {
    const cloth = await Clothes.findOne(name);
    if(!cloth){
        const error = new Error("Cloth not Found!");
        error.status =404;
        throw error;
    }


}

const getAllClothes = async ()=>{
    const clothes= await Clothes.find();

    if(!clothes && clothes.Length===0){
        const error = new Error("Clothes not Found!");
        error.status = 404;
        throw error;
    }
}

const updateCloth = async (id, data)=> {
    const cloth= await Clothes.findByIdAndUpdate(id,data,)
}