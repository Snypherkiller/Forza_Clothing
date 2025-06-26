const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const LOG = require("./configs/log.config");
const connectToDatabase = require("./configs/db.config");

const userRoutes = require("./routes/users.routes");

const app = express();

// Middleware
app.use(express.json());

// 🔁 Register routes BEFORE starting the server
app.use("/api/users", userRoutes);

// Connect to DB
connectToDatabase();

// ✅ Start server AFTER all middlewares and routes are registered
app.listen(process.env.PORT || 3000, () => {
  LOG.info(`Server running on port : ${process.env.PORT || 3000}`);
});
