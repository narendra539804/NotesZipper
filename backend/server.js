//jshint esversion:8

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err, data) => {
  console.log("Server is running");
});
