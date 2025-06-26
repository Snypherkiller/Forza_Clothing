const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();


// Middleware (optional, e.g., for JSON parsing)
app.use(express.json());

// Root route


const LOG = require("./configs/log.config");

/*** Configs ***/

/* Database Connection */
const connectToDatabase = require("./configs/db.config");
connectToDatabase();

/* App Config */
app.listen(process.env.PORT || 3000, () =>
  LOG.info(`Server running on port : ${process.env.PORT || 3000}`)
);
