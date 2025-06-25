const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

// Middleware (optional, e.g., for JSON parsing)
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Forza Clothing API!");
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        "Database connected successfully and server is running on port " + PORT
      );
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });
