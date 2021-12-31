//jshint esversion:8

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const data = require("./data/data");
const notes = require("./data/data");
const userRoutes = require("./routes/userRoutes");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Api is running");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err, data) => {
  console.log("Server is running", PORT);
});
