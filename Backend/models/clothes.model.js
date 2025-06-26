const mongoose =require("mongoose");


const clothesSchema= new mongoose.Schema({
    name: { type:String,required:true},
    description: { type:String,required:true},
    imageUrl: { type:String,required:true},
    price : { type:String,required:true},
    size:{type:String,required:true},
    color:{type:String,required:true},
    category:{type:String,required:true,enum:["Over-sized","Regular","Shirt","Hoodie"]},
    stock:{type:Number,required:true,default:0},
    clothNum: { type:Number,required:true,unique:true}
    
})

module.exports = mongoose.model("Cloths",clothesSchema);
