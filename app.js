const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();
const db = require("./config/mongoose-connection");
const userRouter = require('./routes/usersRouter');


const app = express();

app.use("/users" , userRouter);
app.get('/', (req, res) => {
     res.send("welcome")
})

app.listen(3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
}  

)


