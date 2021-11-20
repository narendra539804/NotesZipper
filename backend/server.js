//jshint esversion:8

const express = require("express");

const app = express();

app.listen(8000, (err, data) => {
  console.log("Server is running");
});
