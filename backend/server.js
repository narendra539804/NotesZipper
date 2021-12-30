//jshint esversion:8

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

dotenv.config();

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err, data) => {
  console.log("Server is running", PORT);
});
