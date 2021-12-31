const express = require("express");

const router = express.Router();

const { registerUser, authUser } = require("../controllers/userControllers");

router.route("/").post(registerUser);
router.route("/login", authUser);
module.exports = router;
