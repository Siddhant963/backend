const express = require('express');
const db = require("./config/mongoose-connection");
const userRouter = require('./routes/usersRouter');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(cors({ 
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: 'GET, POST, PUT, DELETE', // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/users" , userRouter);



app.get('/', (req, res) => {
     res.send("welcome")
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
}  

)


