const express = require("express");
const mongoose= require("mongoose");
require("dotenv").config();



const app = express();
app.get("/favicon.ico", (req, res) => res.status(204).end());


const PORT=process.env.PORT || 5000;




mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Database connected successfully "+"and server is running on port "+PORT)
    })
})
.catch((err)=>{
    console.log("Database connection failed",err);
})


