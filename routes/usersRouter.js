const express = require('express');
const router = express.Router();

// console.log(process.NODE_ENV);

router.get("/" , (req,res)=>{ 
     res.send("Welcome to the user router");
});

module.exports = router;