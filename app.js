const express = require('express');
const db = require("./config/mongoose-connection");
const userRouter = require('./routes/usersRouter');
const categoryRouter = require('./routes/Categoryroutes');
const ProductRouter = require('./routes/ProductRouter');
const orderRouter = require('./routes/orderRouter');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();






app.use(cors());
app.use(cors({ 
    origin: 'https://frontend-twocups.onrender.com' , // Allow requests from your frontend
    methods: 'GET, POST, PUT, DELETE', // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
}))
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use("/users" , userRouter);
app.use("/category" , categoryRouter);
app.use('/product', ProductRouter);
app.use('/order', orderRouter);


app.get('/', (req, res) => {
     res.send("welcome")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}  

)


