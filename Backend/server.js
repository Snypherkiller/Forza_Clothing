const express = require("express");
const mongoose= require("mongoose");
require("dotenv").config();



const app = express();
const PORT=process.env.PORT // 3000;
const MONGODB_URL=process.env.MONGODB_URL;

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Database connected successfully "+"and server is running on port "+PORT)
    })
})
.catch((err)=>{
    console.log("Database connection failed",err);
})


