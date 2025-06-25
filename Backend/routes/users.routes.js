const express =require ("express");
const router=express.Router();

const userController=require("../controllers/users.controller");
const { getUserById, getAllUsers, updateUser, deleteUser } = require("../services/users.service");

router.post(
    "/",userController.addUser
);

router.get(
    "/user/:id",userController,getUserById
);

router.get(
    "/users",userController,getAllUsers
);

router.put(
    "/user/:id",userController,updateUser
);

router.delete(
    "/user/:id",userController,deleteUser
);

module.exports=router;