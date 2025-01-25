const  jwt = require('jsonwebtoken');

module.exports.verifyToken = (token) =>{ 
     try {
          let decoded = jwt.verify(token, process.env.JWT_KEY);
          return decoded;
          
     } catch (error) {
          return res.status(401).json({ message: "Token is not valid" });
     }

}

