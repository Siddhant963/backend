const express = require("express");
const router = express.Router();
const {registerUser , loginUser , logOut ,verifytoken,getProfilebyEmail} = require('../controller/authController')

// console.log(process.NODE_ENV);

router.get("/", (req, res) => {
  res.send("Welcome to the user router");
});

router.post("/register",  registerUser );

router.post("/login"  , loginUser);

router.get("/logout", logOut );

router.post("/verifytoken", verifytoken );

router.get("/getprofile", getProfilebyEmail );

module.exports = router;
