const usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { genrateToken } = require("../utils/genrateToken");
const { verifyToken } = require("../utils/VerifyToken");



module.exports.registerUser =  async(req, res)=>{
     try {
          let { name, email, password, contact, address } = req.body;
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
                                   address,
                              });
                              let token = genrateToken(user);
                              res.cookie("token", token);
                              // console.log(token);
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
          email = user.email;
          userID = user._id;
          isadmin = user.isadmin;
          
         

       
         res.status(200).json({msg: "login successfully" , userID , email ,  isadmin});
     })

}

module.exports.verifytoken = (req,res) =>{
     console.log("hii");
     let token = req.cookies.token || req.headers.authorization?.split(" ")[1];
     console.log("Received Cookies:", req.cookies);
console.log("Received Headers:", req.headers);
     if(!token) return res.status(401).send("Unauthorized");
     const data =verifyToken(token);
   
     
     return res.status(200).json({ data});

}

module.exports.logOut = (req,res)=>{ 
     res.clearCookie("token");
     res.send("Logged out successfully");
     
}

module.exports.getProfilebyEmail= async (req,res) => {
     let {email} = req.query;
     
     let user = await usermodel.findOne({email});
     if(!user){
          return res.status(400).send("User not found");
     }
     res.json(user);

}
