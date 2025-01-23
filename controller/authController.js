const usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { genrateToken } = require("../utils/genrateToken");
module.exports.registerUser =  async(req, res)=>{
     try {
          let { name, email, password, contact, Address } = req.body;
          let user = await usermodel.findOne({ email });
          if (user) {
               return res.status(400).send("User already exists");
          } else {
               bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, async (err, hash) => {
                         if (err) return res.send(err.massege);
                         else {
                              let user = await usermodel.create({
                                   name,
                                   email,
                                   password: hash,
                                   contact,
                                   Address,
                              });
                              let token = genrateToken(user);
                              res.cookie("token", token);
                              console.log(token);
                              res.send(user);

                         }

                    });
               });
          }
     }
     catch (err) {
          console.log(err);
     }
}

module.exports.loginUser = async (req,res)=>{ 
     let {email , password} = req.body;
     let user = await usermodel.findOne({email});
     if(!user){
          return res.status(400).send("User not found");
     }
     bcrypt.compare(password , user.password , async (err , isMatch)=>{
          if(err) return res.status(500).send("Error");
          if(!isMatch) return res.status(400).send("Password is incorrect");
          let token = genrateToken(user);
          res.cookie("token", token);
          res.json("login successfull");
     })

}

module.exports.logOut = (req,res)=>{ 
     res.clearCookie("token");
     res.send("Logged out successfully");
     
}