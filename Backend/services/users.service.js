const mongoose = require("mongoose");
const User = require("../models/users.model");

// Create a new user
const addUser = async (data) => {
  const { email } = data;
  if (!email.includes("@")) {
    throw new Error("Invalid Email format!");
  }

  const user = new User(data);
  return await user.save();
};

// Get user by ID
const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    const error = new Error("User not found!");
    error.status = 404;
    throw error;
  }
  return user;
};

// Get all users
const getAllUsers = async () => {
  const users = await User.find();
  if (!users || users.length === 0) {
    const error = new Error("Users not found!");
    error.status = 404;
    throw error;
  }
  return users;
};

// Update user by ID
const updateUser = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, { new: true });
  if (!user) {
    const error = new Error("User not found!");
    error.status = 404;
    throw error;
  }
  return user;
};

// Delete user by ID
const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id); // ✅ Fixed typo here
  if (!user) {
    const error = new Error("User not found!");
    error.status = 404;
    throw error;
  }
  return user;
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
